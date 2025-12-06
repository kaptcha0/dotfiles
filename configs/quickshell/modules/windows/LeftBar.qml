import Quickshell
import QtQuick
import QtQuick.Layouts

import "../singletons"
import "../widgets"

PanelWindow {
    id: root
    implicitWidth: Configs.sizes.fullSize
    color: Configs.colors.base00
    aboveWindows: true

    anchors {
        top: true
        left: true
        bottom: true
    }

    Rectangle {
        anchors.fill: parent
        color: "transparent"

        anchors.margins: {
            top: Configs.sizes.margin + Configs.sizes.barSize;
            bottom: Configs.sizes.margin + Configs.sizes.barSize;
        }

        ColumnLayout {
            spacing: Configs.sizes.spacing
            anchors.fill: parent

            Item {
                Layout.alignment: Qt.AlignTop
                Layout.fillWidth: true
                Layout.fillHeight: true

                OsIcon {}
            }

            Item {
                Layout.alignment: Qt.AlignCenter
                Layout.fillWidth: true
                Layout.fillHeight: true

                ClockWidget {
                    anchors.fill: parent
                }
            }

            Item {
                Layout.alignment: Qt.AlignBottom
                Layout.fillWidth: true
                // Layout.fillHeight: true
            }
        }
    }
}
