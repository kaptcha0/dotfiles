import QtQuick
import Quickshell
import Quickshell.Widgets
import Quickshell.Io

IconImage {
    readonly property string osInfo: osRelease.text()

    FileView {
        id: osRelease
        path: "/etc/os-release"
        blockLoading: true
    }

    implicitSize: 18

    source: {
        const infoMap = Object.assign({}, ...osInfo.split("\n").map(line => {
            const [key, value] = line.split("=");
            return {
                [key]: value?.replace(/"/g, "")
            };
        }));

        return Quickshell.iconPath(infoMap["LOGO"]);
    }
}
