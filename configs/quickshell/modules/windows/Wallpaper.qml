import Quickshell
import Quickshell.Widgets
import QtQuick
import "../singletons"

PanelWindow {
    anchors {
        left: true
        right: true
        top: true
        bottom: true
    }

    aboveWindows: false
    exclusionMode: ExclusionMode.Ignore
    color: Configs.colors.base00

    margins {
        top: Configs.sizes.barSize
        bottom: Configs.sizes.barSize
        left: Configs.sizes.fullSize
        right: Configs.sizes.barSize
    }

    ClippingWrapperRectangle {
        anchors.fill: parent
        radius: Configs.sizes.radius
        color: "transparent"

        Image {
            source: Qt.resolvedUrl("../../assets/bg")
            fillMode: Image.PreserveAspectCrop
            anchors.fill: parent
        }
    }
}
