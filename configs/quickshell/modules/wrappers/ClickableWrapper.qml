import QtQuick

Item {
    property alias acceptedButtons: mouseArea.acceptedButtons
    property alias hoverEnabled: mouseArea.hoverEnabled
    signal clicked(MouseEvent mouse)
    signal wheel(WheelEvent wheel)

    MouseArea {
        id: mouseArea
        anchors.fill: parent
        hoverEnabled: true
        propagateComposedEvents: false
        preventStealing: true
        cursorShape: Qt.PointingHandCursor
        onClicked: mouse => parent.clicked(mouse)
        onWheel: wheel => parent.wheel(wheel)
    }
}
