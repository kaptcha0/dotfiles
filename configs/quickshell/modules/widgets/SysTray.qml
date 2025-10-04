import Quickshell
import Quickshell.Widgets
import Quickshell.Services.SystemTray
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import "../singletons"
import "../wrappers"

RowLayout {
    spacing: Configs.sizes.spacing

    ClickableWrapper {
        hoverEnabled: false

        onWheel: wheel => {
            wheel.accepted = true;
            const points = wheel.angleDelta.y / 120;
        }
        Repeater {
            model: SystemTray.items

            ClickableWrapper {
                id: item
                required property SystemTrayItem modelData
                implicitHeight: Configs.sizes.iconSize
                implicitWidth: Configs.sizes.iconSize

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

                IconImage {
                    id: icon
                    implicitSize: Configs.sizes.iconSize
                    anchors.centerIn: parent

                    source: item.modelData.icon
                }

                QsMenuAnchor {
                    id: menu
                    menu: item.modelData.menu
                    anchor.item: item
                    anchor.margins.top: Configs.sizes.iconSize + Configs.sizes.margin
                }
            }
        }
    }
}
