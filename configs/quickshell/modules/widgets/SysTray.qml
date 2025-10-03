import Quickshell
import Quickshell.Widgets
import Quickshell.Services.SystemTray
import QtQuick
import QtQuick.Layouts
import QtQuick.Controls

RowLayout {
    spacing: 8

    Repeater {
        model: SystemTray.items

        Item {
            id: item
            required property SystemTrayItem modelData
            implicitHeight: 18
            implicitWidth: 18

            IconImage {
                id: icon
                implicitSize: 18
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
