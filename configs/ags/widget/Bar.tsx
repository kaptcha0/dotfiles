import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { exec } from "ags/process"
import { createPoll } from "ags/time"
import { createBinding, With, For } from "ags"
import Network from "gi://AstalNetwork"
import Bluetooth from "gi://AstalBluetooth"
import Battery from "gi://AstalBattery"
import Wp from "gi://AstalWp"
import Tray from "gi://AstalTray"
import Hyprland from "gi://AstalHyprland"
import Apps from "gi://AstalApps"

const ORIENTATION = Gtk.Orientation.VERTICAL;

type RefreshProps = {
  trigger: string;
};

function AppLauncherModule() {
  const apps = new Apps.Apps({
    nameMultiplier: 2,
    entryMultiplier: 0,
    executableMultiplier: 2,
  })
  
  const osIcons = {
    nix: "nixos-snowflake",
    fedora: "fedora-logo-icon",
    ubuntu: "ubuntu-logo-icon",
    arch: "archlinux",
  };
  
  const osInfo = exec(["cat", "/etc/os-release"]);
  const infoMap = Object.assign({},
    ...osInfo.split("\n").map(line => {
      const [key, value] = line.split("=");
      return { [key]: value.replace(/"/g, "") };
    })
  )

  return (
    <button>
      <image iconName={infoMap.LOGO} />
    </button>
  )
}

function WorkspacesModule() {
  const hyprland = Hyprland.get_default();
  const currentWorkspace = createBinding(hyprland, "focusedWorkspace");

  return (
    <box orientation={ORIENTATION}>
      <With value={currentWorkspace}>
        {(workspace) => (
          <button>
            <label label={workspace.id.toString()} />
          </button>
        )}
      </With>
    </box>
  )
}

function ClockModule() {
  const clock = createPoll("", 1000, "date")

  const fmt = (time: string) => {
    const date = new Date(time)

    return [
      date.getHours().toString().padStart(2, "0"),
      date.getMinutes().toString().padStart(2, "0"),
      date.getSeconds().toString().padStart(2, "0"),
    ]
  }

  return (
    <With value={clock}>
      {(time) => {
        return (
          <button>
            <box orientation={ORIENTATION}>
              {fmt(time).map((t) => (
                <label label={t} />
              ))}
            </box>
          </button>
        )
      }}
    </With>
  )
}

function ControlPanelModule({ trigger }: RefreshProps) {
  const network = Network.get_default()
  const bluetooth = Bluetooth.get_default()
  const battery = Battery.get_default()

  const getLANIcon = () => {
    const iface = network.primary

    switch (iface) {
      case Network.Primary.WIFI:
        return <image iconName={network.wifi.iconName} />
      case Network.Primary.WIRED:
        return <image iconName={network.wired.iconName} />
      default:
        return <image iconName={network.wifi.iconName} />
    }
  }

  const getBluetoothIcon = () => {
    const icons = {
      active: "bluetooth-active",
      inactive: "bluetooth-inactive",
      paired: "bluetooth-paired",
    };

    if (bluetooth.isConnected) {
      return <image iconName={icons.paired} />
    }

    if (bluetooth.isPowered) {
      return <image iconName={icons.active} />
    }

    return <image iconName={icons.inactive} />
  }

  const getBatteryIcon = () => {
    return <image iconName={battery.iconName} />
  }

  return (
    <button>
      <box orientation={ORIENTATION}>
        {getLANIcon()}
        {getBluetoothIcon()}
        {getBatteryIcon()}
      </box>
    </button>
  )
}

function MediaModule() {
  const wp = Wp.get_default();
  const default_speaker = wp.audio.default_speaker;
  const default_mic = wp.audio.default_microphone;

  const volumeIcon = createBinding(default_speaker, "volumeIcon")
  const micIcon = createBinding(default_mic, "volumeIcon")

  return (
    <button>
      <box orientation={ORIENTATION}>
        <With value={volumeIcon}>
          {(iconName) => (
            <image iconName={iconName} />
          )}
        </With>
        <With value={micIcon}>
          {(iconName) => (
            <image iconName={iconName} />
          )}
        </With>
      </box>
    </button>
  )
}

function SysTrayModule() {
  const tray = Tray.get_default()
  const trayIcons = createBinding(tray, "items");
  
  return (
    <box orientation={ORIENTATION}>
      <For each={trayIcons}>
        {(item) => (
          <button>
            <image gicon={item.gicon} />
          </button>
        )}
      </For>
    </box>
  )
}

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const time = createPoll("", 1000, "date")
  const { TOP, LEFT, BOTTOM } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={ORIENTATION}
      anchor={LEFT | TOP | BOTTOM}
      application={app}
    >
      <centerbox orientation={ORIENTATION}>
        <box orientation={ORIENTATION} $type="start">
          <AppLauncherModule />
          <WorkspacesModule />
        </box>
        <box orientation={ORIENTATION} $type="center">
          <ClockModule />
        </box>
        <box orientation={ORIENTATION} $type="end">
          <MediaModule />
          <With value={time}>
            {(t) => (
              <ControlPanelModule trigger={t} />
            )}
          </With>
          <SysTrayModule />
        </box>
      </centerbox>
    </window>
  )
}
