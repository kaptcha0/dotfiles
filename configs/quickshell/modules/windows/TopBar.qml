import Quickshell
import QtQuick
import QtQuick.Layouts

import "../widgets"
import "../singletons"

PanelWindow {
    id: root
    implicitHeight: Configs.sizes.barSize
    color: Configs.colors.base00
    aboveWindows: true

    anchors {
        top: true
        left: true
        right: true
    }

    Rectangle {
        color: "transparent"
        anchors.fill: parent
        anchors.margins: {
            left: Configs.sizes.margin;
            right: Configs.sizes.margin;
        }
    }
}
