import Quickshell
import Quickshell.Widgets
import Quickshell.Services.Notifications
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import "../singletons"

Item {
    id: root
    implicitWidth: Configs.sizes.iconSize
    implicitHeight: Configs.sizes.iconSize
    state: Notifications.newNotifications.length == 0 ? "idle" : "newNotif"
    opacity: 0.5
    property Notification notif

    states: [
        State {
            name: "newNotif"
            PropertyChanges {
                root.opacity: 1
            }
        },
        State {
            name: "idle"
            PropertyChanges {
                root.opacity: 0.5
            }
        }
    ]

    IconImage {
        implicitSize: Configs.sizes.iconSize

        source: {
            const iconName = root.state === "newNotif" ? 'notification-active' : 'notification-inactive';

            return Quickshell.iconPath(iconName);
        }
    }

    PopupWindow {
        anchor.item: root
        anchor.gravity: Edges.Bottom | Edges.Left
        anchor.edges: Edges.Bottom | Edges.Left

        visible: root.state === "newNotif"
        implicitWidth: 256
        implicitHeight: 300

        color: "transparent"

        Rectangle {
            id: rect
            anchors.fill: parent
            radius: Configs.sizes.radius
            // color: Configs.colors.base00
        color: "transparent"

            ScrollView {
                anchors.fill: parent

                ScrollBar.vertical.hoverEnabled: true
                ScrollBar.vertical.implicitWidth: Configs.sizes.margin

                ColumnLayout {
                    id: column
                    spacing: Configs.sizes.spacing

                    Repeater {
                        model: Notifications.newNotifications

                        NotifPopup {
                            required property Notification modelData
                            notif: modelData

                            implicitWidth: 256
                        }
                    }
                }
            }
        }
    }

    Component.onCompleted: {
        Notifications.newCount.connect(c => {
            if (c != 0)
                return;
            root.state = "idle";
            root.notif = null;
        });

        Notifications.newNotification.connect(n => {
            root.notif = n;
            root.state = "newNotif";
        });
    }
}
