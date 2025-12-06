pragma Singleton

import Quickshell
import Quickshell.Io
import QtQuick

Singleton {
    readonly property var sizes: {
        return {
            margin: 8,
            iconSize: 18,
            fontSize: 16,
            radius: 8,
            spacing: 8,
            barSize: 8,
            fullSize: 32
        };
    }

    readonly property var colors: {
        const colors = JSON.parse(stylix.text());

        for (const [key, value] of Object.entries(colors)) {
            if (!key.startsWith("base"))
                continue;

            const newValue = "#" + value;
            colors[key.toLowerCase()] = newValue;
        }

        return colors;
    }

    readonly property var animations: {
        return {
            duration: 200,
            easing: {
                type: Easing.InOutBack,
                overshoot: 2
            }
        };
    }

    FileView {
        id: stylix
        path: Qt.resolvedUrl("../../assets/palette.json")
        blockLoading: true
        watchChanges: true
        onFileChanged: this.reload()
    }
}
