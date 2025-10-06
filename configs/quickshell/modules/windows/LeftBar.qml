import Quickshell
import QtQuick
import QtQuick.Layouts

import "../singletons"

PanelWindow {
    id: root
    implicitWidth: Configs.sizes.barSize
    color: Configs.colors.base00
    aboveWindows: false

    anchors {
        top: true
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

        ColumnLayout {
            anchors.fill: parent

            Item {
                Layout.alignment: Qt.AlignTop
                Layout.fillWidth: true
                Layout.fillHeight: true

                Column {
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.verticalCenter: parent.top
                    spacing: Configs.sizes.spacing
                }
            }

            Item {
                Layout.alignment: Qt.AlignCenter
                Layout.fillWidth: true
                Layout.fillHeight: true

                Column {
                    anchors.horizontalCenter: parent.horizontalCenter
                    anchors.verticalCenter: parent.verticalCenter
                    spacing: Configs.sizes.spacing
                }
            }

            Item {
                Layout.alignment: Qt.AlignBottom
                Layout.fillWidth: true
                Layout.fillHeight: true

                Column {
                    anchors.verticalCenter: parent.bottom
                    anchors.horizontalCenter: parent.horizontalCenter
                    spacing: Configs.sizes.spacing
                    bottomPadding: childrenRect.height
                }
            }
        }
    }
}
