import Quickshell
import Quickshell.Widgets
import Quickshell.Services.SystemTray
import QtQuick
import QtQuick.Layouts

import "../singletons"

RowLayout {
    spacing: Configs.sizes.spacing

    Repeater {
        model: SystemTray.items

        Item {
            id: item
            required property SystemTrayItem modelData
            implicitHeight: Configs.sizes.iconSize
            implicitWidth: Configs.sizes.iconSize

            IconImage {
                id: icon
                implicitSize: Configs.sizes.iconSize
                anchors.centerIn: parent

                source: item.modelData.icon
            }

            HoverHandler {
                id: hover
                cursorShape: Qt.PointingHandCursor
                parent: item
            }

            // ToolTip {
            //     parent: icon
            //     visible: hover.hovered
            //     delay: 500
            //     text: {
            //         let title = item.modelData.tooltipTitle;

            //         if (!title || title === "")
            //             title = item.modelData.title;

            //         return title;
            //     }
            // }

            MouseArea {
                anchors.fill: parent
                acceptedButtons: Qt.LeftButton | Qt.MiddleButton | Qt.RightButton
                onClicked: mouse => {
                    if (mouse.button == Qt.LeftButton) {
                        menu.open();
                    } else if (mouse.button == Qt.RightButton) {
                        item.modelData.activate();
                    } else {
                        item.modelData.secondaryActivate();
                    }
                }

                onWheel: event => {
                    event.accepted = true;
                    const points = event.angleDelta.y / 120;
                    item.modelData.scroll(points, false);
                }
            }

            QsMenuAnchor {
                id: menu
                menu: item.modelData.menu
                anchor.item: item
            }
        }
    }
}
