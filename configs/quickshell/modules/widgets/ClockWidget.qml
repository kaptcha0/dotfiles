import "../singletons"
import QtQuick

Column {
    Text {
        color: Configs.colors.base05
        text: Time.hours

        anchors.horizontalCenter: parent.horizontalCenter
    }

    Text {
        color: Configs.colors.base05
        text: Time.mins
        anchors.horizontalCenter: parent.horizontalCenter
    }
}
