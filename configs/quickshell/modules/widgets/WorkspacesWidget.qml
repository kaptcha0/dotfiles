import Quickshell.Hyprland
import QtQuick

Repeater {
    model: Hyprland.workspaces

    Text {
        required property HyprlandWorkspace modelData

        color: modelData.focused ? "red" : "#f1f1f1"
        text: modelData.name
    }
}
