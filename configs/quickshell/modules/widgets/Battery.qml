import Quickshell
import Quickshell.Services.UPower
import Quickshell.Widgets
import QtQuick

import "../wrappers"
import "../singletons"

ClickableWrapper {
    implicitHeight: Configs.sizes.iconSize
    implicitWidth: Configs.sizes.iconSize

    Row {
        spacing: Configs.sizes.spacing

        // Text {
        //     text: UPower.displayDevice.percentage
        //     color: Configs.colors.base05
        // }

        IconImage {
            source: Quickshell.iconPath(UPower.displayDevice.iconName)

            implicitSize: Configs.sizes.iconSize
        }

    }
}
