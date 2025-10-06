import Quickshell
import Quickshell.Widgets
import QtQuick

import "../singletons"
import "../wrappers/"

Item {
    id: root
    implicitWidth: Configs.sizes.iconSize
    implicitHeight: Configs.sizes.iconSize
    state: Notifications.newNotif ? "idle" : "newNotif"
    opacity: Notifications.newNotif ? 1 : 0.5

    ClickableWrapper {
        implicitWidth: Configs.sizes.iconSize
        implicitHeight: Configs.sizes.iconSize

        onClicked: mouse => {
            if (mouse.button == Qt.LeftButton) {
                Notifications.togglePanel()
                return
            }

            Notifications.toggleDnd()
        }

        IconImage {
            implicitSize: Configs.sizes.iconSize

            source: {
                let iconName = Notifications.newNotif ? 'notification-active' : 'notification-inactive';                    

                if (Notifications.dndOn)
                    iconName = 'notification-disabled'

                return Quickshell.iconPath(iconName);
            }
        }
    }
}
