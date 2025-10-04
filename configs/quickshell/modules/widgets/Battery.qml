import Quickshell
import Quickshell.Services.UPower
import Quickshell.Widgets
import QtQuick

import "../wrappers"
import "../singletons"

ClickableWrapper {
    implicitHeight: Configs.sizes.iconSize
    implicitWidth: Configs.sizes.iconSize

    IconImage {
        source: Quickshell.iconPath(UPower.displayDevice.iconName)

        implicitSize: Configs.sizes.iconSize
    }
}
