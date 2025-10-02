import Quickshell
import QtQuick
import QtQuick.Layouts

import "../widgets/"

PanelWindow {
    id: root
    implicitHeight: 32
    color: "transparent"

    anchors {
        top: true
        left: true
        right: true
    }

    Rectangle {
        color: "#1e1e1e"
        anchors.fill: parent

        RowLayout {
            spacing: 8
            anchors.fill: parent

            Rectangle {
                color: "transparent"
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.alignment: Qt.AlignLeft

                Row {
                    spacing: 8
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
                    spacing: 8
                    anchors.centerIn: parent

                    WindowTitleWidget {}
                }
            }

            Rectangle {
                color: "transparent"
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.alignment: Qt.AlignRight

                Row {
                    spacing: 8
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.right: parent.right

                    ClockWidget {
                        color: "#f1f1f1"
                    }

                    Battery {}
                }
            }
        }
    }
}
