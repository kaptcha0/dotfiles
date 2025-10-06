import Quickshell
import QtQuick
import QtQuick.Layouts

import "../widgets/"
import "../singletons/"

PanelWindow {
    id: root
    implicitHeight: Configs.sizes.barSize
    color: Configs.colors.base00
    aboveWindows: false

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

        RowLayout {
            spacing: Configs.sizes.spacing
            anchors.fill: parent

            Item {
                Layout.leftMargin: Configs.sizes.barSize
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

            Item {
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.alignment: Qt.AlignCenter

                Row {
                    spacing: Configs.sizes.spacing
                    anchors.centerIn: parent

                    WindowTitleWidget {}
                }
            }

            Item {
                Layout.rightMargin: Configs.sizes.barSize
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.alignment: Qt.AlignRight

                Row {
                    spacing: Configs.sizes.spacing
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.right: parent.right

                    Battery {}

                    SysTray {}
                }
            }
        }
    }
}
