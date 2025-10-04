import Quickshell.Hyprland
import QtQuick

import "../singletons"
import "../wrappers"

Repeater {
    model: Hyprland.workspaces

    ClickableWrapper {
        id: root
        required property HyprlandWorkspace modelData

        implicitWidth: modelData.focused ? Configs.sizes.iconSize * 2 : Configs.sizes.iconSize
        implicitHeight: Configs.sizes.iconSize

        onClicked: {
            !modelData.active && modelData.activate();
        }

        Rectangle {
            color: root.modelData.active ? Configs.colors.base0c : Configs.colors.base03
            radius: Configs.sizes.radius
            anchors.fill: parent

            Text {
                text: root.modelData.id > 0 ? root.modelData.id.toString() : "S"
                color: root.modelData.active ? Configs.colors.base03 : Configs.colors.base02
                font.pixelSize: Configs.sizes.iconSize / 2
                anchors.centerIn: parent
            }

            Behavior on color {
                ColorAnimation {
                    duration: Configs.animations.duration + 256
                    easing: Configs.animations.easing
                }
            }
        }

        Behavior on implicitWidth {
            NumberAnimation {
                duration: Configs.animations.duration
                easing: Configs.animations.easing
            }
        }
    }
}
