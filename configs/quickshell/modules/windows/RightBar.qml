import Quickshell
import QtQuick

import "../singletons"

PanelWindow {
    id: root
    implicitWidth: Configs.sizes.barSize
    color: Configs.colors.base00

    anchors {
        top: true
        right: true
        bottom: true
    }

    Rectangle {
        anchors.fill: parent
        color: "transparent"
    }
}
