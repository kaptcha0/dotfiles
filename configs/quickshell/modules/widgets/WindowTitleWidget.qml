import Quickshell.Hyprland
import QtQuick

import "../singletons"

Text {
    readonly property HyprlandToplevel activeWindow: Hyprland.activeToplevel
    color: Configs.colors.base05

    text: activeWindow ? activeWindow.title : ""
    font.bold: true
}
