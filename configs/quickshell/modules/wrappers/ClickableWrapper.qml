import QtQuick
import QtQuick.Controls

import "../singletons/"

Item {
    property alias acceptedButtons: mouseArea.acceptedButtons
    property alias hoverEnabled: mouseArea.hoverEnabled
    property string tooltipText
    signal clicked(MouseEvent mouse)
    signal wheel(WheelEvent wheel)

    ToolTip.visible: mouseArea.containsMouse && tooltipText && tooltipText !== ""
    ToolTip.text: tooltipText
    ToolTip.delay: Configs.animations.duration

    MouseArea {
        id: mouseArea
        anchors.fill: parent
        hoverEnabled: true
        propagateComposedEvents: false
        preventStealing: true
        acceptedButtons: Qt.AllButtons
        cursorShape: Qt.PointingHandCursor
        onClicked: mouse => parent.clicked(mouse)
        onWheel: wheel => parent.wheel(wheel)
    }
}
