import Quickshell.Hyprland
import QtQuick

import "../singletons"

Repeater {
    model: Hyprland.workspaces

    Rectangle {
        required property HyprlandWorkspace modelData

        color: modelData.focused ? Configs.colors.base0c : Configs.colors.base03
        radius: Configs.sizes.radius

        implicitWidth: modelData.focused ? Configs.sizes.iconSize * 2 : Configs.sizes.iconSize
        implicitHeight: Configs.sizes.iconSize

        Text {
            text: modelData.id.toString()
            color: modelData.focused ? Configs.colors.base03 : Configs.colors.base02
            font.pixelSize: Configs.sizes.iconSize / 2
            anchors.centerIn: parent
        }

        Behavior on implicitWidth {
            NumberAnimation {
                duration: Configs.animations.duration
                easing: Configs.animations.easing
            }
        }
    }
}
