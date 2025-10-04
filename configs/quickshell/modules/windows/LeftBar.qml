import Quickshell
import QtQuick
import "../singletons"
import "../widgets"

PanelWindow {
    id: root
    implicitWidth: Configs.sizes.barSize
    color: Configs.colors.base00

    anchors {
        top: true
        left: true
        bottom: true
    }

    Rectangle {
        anchors.fill: parent
        color: "transparent"
    }
}
