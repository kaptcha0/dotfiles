import Quickshell.Hyprland
import QtQuick

Text {
    readonly property HyprlandToplevel activeWindow: Hyprland.activeToplevel
    color: "#f1f1f1"

    text: activeWindow ? activeWindow.title : ""
}
