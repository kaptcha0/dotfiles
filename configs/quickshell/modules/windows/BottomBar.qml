import Quickshell
import QtQuick
import QtQuick.Layouts

import "../singletons"
import "../widgets"

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
                Layout.alignment: Qt.AlignLeft
                Layout.fillHeight: true
            }

            Item {
                Layout.alignment: Qt.AlignCenter
                Layout.fillWidth: true
                Layout.fillHeight: true

                MpriWidget {
                    anchors.fill: parent
                    anchors.centerIn: parent
                }
            }

            Item {
                Layout.alignment: Qt.AlignRight
                Layout.fillHeight: true
            }
        }
    }
}
