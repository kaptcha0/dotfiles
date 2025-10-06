pragma ComponentBehavior: Bound

import QtQuick.Controls.Material
import Quickshell
import QtQuick

import "./modules/windows"

Scope {
    id: root

    Variants {
        model: Quickshell.screens

        Loader {
            id: topBar
            required property var modelData
            asynchronous: false

            TopBar {
                screen: topBar.modelData
            }
        }
    }

    Variants {
        model: Quickshell.screens

        Loader {
            id: bottomBar
            required property var modelData
            asynchronous: false

            BottomBar {
                screen: bottomBar.modelData
            }
        }
    }

    Variants {
        model: Quickshell.screens

        Loader {
            id: leftBar
            required property var modelData
            active: topBar.status == Loader.Ready && bottomBar.status == Loader.Ready

            LeftBar {
                screen: leftBar.modelData
            }
        }
    }

    Variants {
        model: Quickshell.screens

        Loader {
            id: rightBar
            required property var modelData
            active: topBar.status == Loader.Ready && bottomBar.status == Loader.Ready

            RightBar {
                screen: rightBar.modelData
            }
        }
    }

    Variants {
        model: Quickshell.screens

        Loader {
            id: wallpaper
            required property var modelData
            active: leftBar.status == Loader.Ready && rightBar.status == Loader.Ready

            Wallpaper {
                screen: wallpaper.modelData
            }
        }
    }
}
