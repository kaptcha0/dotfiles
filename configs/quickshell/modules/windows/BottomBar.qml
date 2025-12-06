import Quickshell
import QtQuick
import QtQuick.Layouts

import "../singletons"
import "../widgets"

PanelWindow {
    id: root
    implicitHeight: Configs.sizes.barSize
    color: Configs.colors.base00
    aboveWindows: true

    anchors {
        right: true
        left: true
        bottom: true
    }

    Rectangle {
        anchors.fill: parent
        color: "transparent"
        anchors.margins: {
            top: Configs.sizes.margin;
            bottom: Configs.sizes.margin;
        }
    }
}
