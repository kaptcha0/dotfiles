//@ pragma UseQApplication
import Quickshell

import "./modules/bar"

Scope {
    id: root

    Variants {
        model: Quickshell.screens

        TopBar {
            required property var modelData
            screen: modelData
        }
    }
}
