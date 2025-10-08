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
            top: Configs.sizes.margin + Configs.sizes.barSize;
            bottom: Configs.sizes.margin + Configs.sizes.barSize;
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
                Layout.bottomMargin: Configs.sizes.barSize
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
