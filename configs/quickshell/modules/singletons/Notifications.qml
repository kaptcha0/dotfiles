pragma Singleton

import QtQuick
import Quickshell
import Quickshell.Io

Singleton {
    id: root
    property bool newNotif: false
    property bool dndOn: false
    property string tooltip: ""

    function togglePanel() {
        toggle.running = true;
    }

    function toggleDnd() {
        dnd.running = true;
        dndOn = !dndOn
    }

    Process {
        running: true
        command: ["swaync-client", "-swb"]
        stdout: SplitParser {
            onRead: data => {
                const msg = JSON.parse(data);

                root.tooltip = msg.tooltip;
                root.newNotif = msg.class.includes("notification");
                root.dndOn = msg.alt.includes("dnd")
            }
        }
    }

    Process {
        id: toggle
        running: false
        command: ["swaync-client", "-t"]
    }

    Process {
        id: dnd
        running: false
        command: ["swaync-client", "-d"]
    }
}
