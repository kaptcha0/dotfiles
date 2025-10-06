import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Widgets
import Quickshell.Services.Notifications

import "../singletons/"
import "../wrappers/"

Rectangle {
    id: root
    required property Notification notif

    color: Configs.colors.base00
    radius: Configs.sizes.radius

    implicitWidth: content.implicitWidth + (2 * Configs.sizes.margin)
    implicitHeight: content.implicitHeight + (2 * Configs.sizes.margin)

    ColumnLayout {
        id: content
        spacing: Configs.sizes.spacing

        RowLayout {
            Layout.fillWidth: true
            Layout.topMargin: Configs.sizes.margin
            Layout.leftMargin: Configs.sizes.margin
            Layout.rightMargin: Configs.sizes.margin

            ClickableWrapper {
                Layout.alignment: Qt.AlignLeft
                acceptedButtons: Qt.LeftButton
                z: 1

                implicitWidth: Configs.sizes.iconSize
                implicitHeight: Configs.sizes.iconSize

                onClicked: {
                    console.log("clicked");
                    Notifications.dismissNotification(root.notif);
                    root.destroy();
                }

                Rectangle {
                    anchors.fill: parent
                    IconImage {
                        implicitSize: Configs.sizes.iconSize
                        source: Quickshell.iconPath("window-close")
                    }
                }
            }

            Text {
                Layout.alignment: Qt.AlignCenter
                text: root.notif.appName
                color: Configs.colors.base05
                font.bold: true
            }

            IconImage {
                Layout.alignment: Qt.AlignRight
                implicitSize: Configs.sizes.iconSize
                source: root.notif.appIcon
            }
        }

        Text {
            Layout.fillWidth: true
            Layout.leftMargin: Configs.sizes.margin
            Layout.rightMargin: Configs.sizes.margin
            text: root.notif.summary
            color: Configs.colors.base05
            wrapMode: Text.WordWrap
        }
    }
}
