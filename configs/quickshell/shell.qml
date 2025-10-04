//@ pragma UseQApplication
import Quickshell

import "./modules"

Scope {
    id: root

    Variants {
        model: Quickshell.screens

        Shell {
            required property var modelData
            screen: modelData
        }
    }
}
