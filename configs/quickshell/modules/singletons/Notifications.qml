pragma Singleton

import Quickshell
import Quickshell.Services.Notifications
import QtQuick

Singleton {
    id: root
    readonly property alias trackedNotifications: server.trackedNotifications
    property list<Notification> newNotifications: []
    property var newNotificationsMetadata: []

    signal newNotification(Notification notif)
    signal newCount(real c)

    function dismissNotification(notif: Notification) {
        notif.dismiss();

        root.newNotificationsMetadata = root.newNotificationsMetadata.filter(item => item.id == notif.id);

        root.newNotifications = root.newNotifications.filter(item => i.id == notif.id);
    }

    NotificationServer {
        id: server

        imageSupported: true
        persistenceSupported: true
        actionIconsSupported: true
        bodyMarkupSupported: true

        onNotification: notif => {
            notif.tracked = true;
            root.newNotification(notif);

            const now = Date.now();
            const expiresAt = now + (notif.expireTimeout < 0 ? 5000 : notif.expireTimeout);
            var item = Object.assign({}, notif);
            item.created = now;
            item.expiresAt = expiresAt;

            root.newNotifications.push(notif);
            root.newNotificationsChanged(); // force property update
            root.newNotificationsMetadata.push(item);
            root.newNotificationsMetadataChanged(); // force property update
            root.newCount(root.newNotifications.length);

            root.scheduleNextCleanup();
        }
    }

    Timer {
        id: cleanupTimer
        repeat: false
        onTriggered: {
            const now = Date.now();
            const toRemove = root.newNotificationsMetadata.filter(item => item.expiresAt <= now);
            root.newNotificationsMetadata = root.newNotificationsMetadata.filter(item => item.expiresAt > now);

            root.newNotifications = root.newNotifications.filter(item => !toRemove.some(i => i.id == item.id));

            const l = root.newNotifications.length;
            root.newCount(l);

            root.scheduleNextCleanup();
        }
    }

    // Schedule the next cleanup based on soonest expiration
    function scheduleNextCleanup() {
        if (root.newNotifications.length === 0) {
            cleanupTimer.stop();
            return;
        }

        // Find earliest expiration
        const nextExpire = Math.min.apply(null, root.newNotifications.map(i => i.expiresAt));

        const nextDelay = Math.max(0, nextExpire - Date.now());
        cleanupTimer.interval = nextDelay;
        cleanupTimer.start();
    }

    Component.onCompleted: root.scheduleNextCleanup()
}
