//@ pragma UseQApplication
pragma ComponentBehavior: Bound

import QtQuick.Controls.Material
import Quickshell
import QtQuick

import "./modules/windows"
import "./modules/singletons"

Scope {
    id: root

    PanelWindow {
        anchors {
            top: true
            bottom: true
            left: true
            right: true
        }

        // color: Configs.colors.base00
        color: "transparent"
        aboveWindows: false

        mask: Region {
            item: rect
            intersection: Intersection.Xor
        }

        Rectangle {
            id: rect
            anchors.fill: parent
            radius: Configs.sizes.radius
            color: "transparent"
        }
    }

    // Loader {
    //     id: topBar
    //     asynchronous: false

    //     Variants {
    //         model: Quickshell.screens

    //         TopBar {
    //             required property var modelData
    //             screen: modelData
    //         }
    //     }
    // }

    // Loader {
    //     id: bottomBar
    //     asynchronous: false

    //     Variants {
    //         model: Quickshell.screens

    //         BottomBar {
    //             required property var modelData
    //             screen: modelData
    //         }
    //     }
    // }

    // Loader {
    //     id: leftBar
    //     asynchronous: false
    //     active: topBar.status == Loader.Ready && bottomBar.status == Loader.Ready

    //     Variants {
    //         model: Quickshell.screens

    //         LeftBar {
    //             required property var modelData
    //             screen: modelData
    //         }
    //     }
    // }

    // Loader {
    //     id: rightBar
    //     asynchronous: false
    //     active: topBar.status == Loader.Ready && bottomBar.status == Loader.Ready
    //     Variants {
    //         model: Quickshell.screens

    //         RightBar {
    //             required property var modelData
    //             screen: modelData
    //         }
    //     }
    // }

    // Loader {
    //     id: wallpaper
    //     asynchronous: false
    //     active: leftBar.status == Loader.Ready && rightBar.status == Loader.Ready

    //     Variants {
    //         model: Quickshell.screens

    //         Wallpaper {
    //             required property var modelData
    //             screen: modelData
    //         }
    //     }
    // }
}
