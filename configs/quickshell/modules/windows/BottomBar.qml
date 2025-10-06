import Quickshell
import QtQuick
import QtQuick.Layouts

import "../singletons"

PanelWindow {
    id: root
    implicitHeight: Configs.sizes.barSize
    color: Configs.colors.base00
    aboveWindows: false

    anchors {
        right: true
        left: true
        bottom: true
    }

    Rectangle {
        anchors.fill: parent
        color: "transparent"
        anchors.margins: {
            top: Configs.sizes.margin
            bottom: Configs.sizes.margin
        }

        RowLayout {
            anchors.fill: parent

            Item {
                Layout.leftMargin: Configs.sizes.barSize
                Layout.alignment: Qt.AlignLeft
                Layout.fillWidth: true
                Layout.fillHeight: true
            }

            Item {
                Layout.alignment: Qt.AlignCenter
                Layout.fillWidth: true
                Layout.fillHeight: true
            }

            Item {
                Layout.rightMargin: Configs.sizes.barSize
                Layout.alignment: Qt.AlignRight
                Layout.fillWidth: true
                Layout.fillHeight: true
            }
        }
    }
}
