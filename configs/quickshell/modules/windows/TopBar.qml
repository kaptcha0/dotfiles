import Quickshell
import QtQuick
import QtQuick.Layouts

import "../widgets/"
import "../singletons"

PanelWindow {
    id: root
    implicitHeight: Configs.sizes.barSize
    color: Configs.colors.base00

    anchors {
        top: true
        left: true
        right: true
    }

    Rectangle {
        color: "transparent"
        anchors.fill: parent

        RowLayout {
            spacing: Configs.sizes.spacing
            anchors.fill: parent

            Rectangle {
                color: "transparent"
                Layout.leftMargin: Configs.sizes.margin
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.alignment: Qt.AlignLeft

                Row {
                    spacing: Configs.sizes.spacing
                    anchors.verticalCenter: parent.verticalCenter

                    OsIcon {}

                    WorkspacesWidget {}
                }
            }

            Rectangle {
                color: "transparent"
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.alignment: Qt.AlignCenter

                Row {
                    spacing: Configs.sizes.spacing
                    anchors.centerIn: parent

                    WindowTitleWidget {}
                }
            }

            Rectangle {
                color: "transparent"
                Layout.rightMargin: Configs.sizes.margin
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.alignment: Qt.AlignRight

                Row {
                    spacing: Configs.sizes.spacing
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.right: parent.right

                    ClockWidget {
                        color: "#f1f1f1"
                    }

                    Battery {}

                    SysTray {}
                }
            }
        }
    }
}
