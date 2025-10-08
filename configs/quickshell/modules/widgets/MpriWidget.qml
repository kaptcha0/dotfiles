import Quickshell
import Quickshell.Widgets
import Quickshell.Services.Mpris
import QtQuick
import QtQuick.Layouts

import "../singletons"
import "../wrappers"

RowLayout {
    id: root
    spacing: Configs.sizes.spacing

    readonly property list<MprisPlayer> mpris: {
        const values = Mpris.players.values;

        return values.filter(mpri => mpri.canPlay && mpri.canPause && mpri.canControl && mpri.canTogglePlaying && mpri.canRaise);
    }

    readonly property MprisPlayer mpri: mpris[0] ?? null

    ClickableWrapper {
        Layout.alignment: Qt.AlignCenter
        Layout.fillHeight: true

        Layout.preferredWidth: childrenRect.width

        Text {
            visible: root.mpri
            anchors.centerIn: parent
            text: `Now playing "<b>${root.mpri?.trackTitle}</b>" via <b>${root.mpri?.desktopEntry}</b>`
            color: Configs.colors.base05
        }

        IconImage {
            visible: !root.mpri
            anchors.centerIn: parent
            implicitSize: Configs.sizes.iconSize
            source: Quickshell.iconPath("open-menu-symbolic")
        }
    }
}

// Row {
//     spacing: Configs.sizes.spacing
//     Layout.alignment: Qt.AlignCenter

//     Repeater {
//         model: ["media-skip-backward", "media-seek-backward", mpri.isPlaying ? "media-playback-pause" : "media-playback-start", "media-seek-forward", "media-skip-forward"]

//         ClickableWrapper {
//             required property string modelData
//             implicitWidth: Configs.sizes.iconSize
//             implicitHeight: Configs.sizes.iconSize

//             IconImage {
//                 implicitSize: Configs.sizes.iconSize

//                 source: Quickshell.iconPath(parent.modelData)
//             }
//         }
//     }
// }
