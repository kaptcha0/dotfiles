import Quickshell
import QtQuick
import QtQuick.Layouts

import "../singletons"
import "../widgets"

PanelWindow {
    id: root
    implicitWidth: Configs.sizes.barSize
    color: Configs.colors.base00
    aboveWindows: false

    anchors {
        top: true
        right: true
        bottom: true
    }

    Rectangle {
        anchors.fill: parent
        color: "transparent"
        anchors.margins: {
            top: Configs.sizes.margin;
            bottom: Configs.sizes.margin;
        }

        ColumnLayout {
            anchors.fill: parent

            Item {
                Layout.topMargin: Configs.sizes.barSize
                Layout.alignment: Qt.AlignTop
                Layout.fillWidth: true
                Layout.fillHeight: true

                Column {
                    anchors.horizontalCenter: parent.horizontalCenter

                    NotificationsWidget {}
                }
            }

            Item {
                Layout.alignment: Qt.AlignCenter
                Layout.fillWidth: true
                Layout.fillHeight: true

                Column {
                    anchors.verticalCenter: parent.verticalCenter
                    anchors.horizontalCenter: parent.horizontalCenter
                    spacing: Configs.sizes.spacing

                    ClockWidget {}
                }
            }

            Item {
                Layout.bottomMargin: Configs.sizes.barSize
                Layout.alignment: Qt.AlignBottom
                Layout.fillWidth: true
                Layout.fillHeight: true

                Column {
                    anchors.verticalCenter: parent.bottom
                    anchors.horizontalCenter: parent.horizontalCenter
                    spacing: Configs.sizes.spacing
                    bottomPadding: childrenRect.height

                    SysTray {}
                }
            }
        }
    }
}
