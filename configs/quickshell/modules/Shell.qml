import Quickshell
import "./windows"

Scope {
    required property ShellScreen screen

    TopBar {
        screen: screen
    }

    LeftBar {
        screen: screen
    }

    RightBar {
        screen: screen
    }

    BottomBar {
        screen: screen
    }

    Wallpaper {
        screen: screen
    }
}
