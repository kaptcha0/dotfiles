import Quickshell
import QtQuick
import "../singletons"

PanelWindow {
    id: root
    implicitHeight: Configs.sizes.barSize
    color: Configs.colors.base00

    anchors {
        right: true
        left: true
        bottom: true
    }

    Rectangle {
        anchors.fill: parent
        color: "transparent"
    }
}
