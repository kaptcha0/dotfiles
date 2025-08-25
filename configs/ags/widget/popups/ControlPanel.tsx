import { Gtk } from "ags/gtk4"
import PopupWindow from "./Popup"
import AstalPowerProfiles from "gi://AstalPowerProfiles"
import AstalBattery from "gi://AstalBattery"
import { createBinding, For, With } from "gnim"
import { ORIENTATION } from "../common"
import AstalNetwork from "gi://AstalNetwork?version=0.1"
import { createPoll } from "ags/time"
import AstalBluetooth from "gi://AstalBluetooth?version=0.1"
import { createSubprocess, exec } from "ags/process"

export default function ControlPanelWindow() {
  return (
    <PopupWindow
      name="control-panel"
      valign={Gtk.Align.END}
      halign={Gtk.Align.START}
      widthRequest={256}
    >
      <box orientation={ORIENTATION}>
        <PowerWidget />
        <NetworkWidget />
        <BluetoothWidget />
      </box>
    </PopupWindow>
  )
}

function NetworkWidget() {
  const network = AstalNetwork.get_default()
  let revealer: Gtk.Revealer

  const netData = createPoll({ adapter: "", info: "" }, 1000, () => {
    let adapter = ""
    let info = ""

    switch (network.primary) {
      case AstalNetwork.Primary.WIFI:
        adapter = "Wi-Fi"
        info = network.wifi.ssid
        break
      case AstalNetwork.Primary.WIRED:
        adapter = "Ethernet"
        info = network.wired.speed.toString()
      default:
        adapter = "Unknown"
        info = "N/A"
        break
    }

    return {
      adapter,
      info,
    }
  })

  network.wifi.scan()

  const sortAps = () => {
    network.wifi.scan()

    const aps = network.wifi.accessPoints

    return {
      current: aps.find(
        (ap) => ap.bssid === network.wifi.activeAccessPoint.bssid,
      ),
      aps: aps.sort((a, b) => b.strength - a.strength).slice(0, 8),
    }
  }

  const aps = createPoll(sortAps(), 10000, sortAps)

  return (
    <box orientation={ORIENTATION}>
      <button
        onClicked={() => revealer.set_reveal_child(!revealer.revealChild)}
      >
        <With value={netData}>
          {({ adapter, info }) => (
            <centerbox>
              <label $type="start" label={adapter} />
              <image $type="center" iconName="network-modem" />
              <label $type="end" label={info} />
            </centerbox>
          )}
        </With>
      </button>
      <revealer $={(ref) => (revealer = ref)}>
        <With value={aps}>
          {({ aps, current }) => (
            <box orientation={ORIENTATION}>
              {aps.map((ap) => (
                <button onClicked={() => {}}>
                  <centerbox>
                    <image $type="start" iconName={ap.iconName} />
                    <label
                      $type="center"
                      label={ap.ssid?.trim() === "" ? ap.bssid : ap.ssid}
                    />
                    <label
                      $type="end"
                      label={current?.bssid === ap.bssid ? "✓" : ""}
                    />
                  </centerbox>
                </button>
              ))}
            </box>
          )}
        </With>
      </revealer>
    </box>
  )
}

function BluetoothWidget() {
  const bt = AstalBluetooth.get_default()

  return (
    <box orientation={ORIENTATION}>
      <button onClicked={() => {}}>
        <label label="Bluetooth" />
      </button>
    </box>
  )
}

function PowerWidget() {
  const powerProfiles = AstalPowerProfiles.get_default()
  const profile = createBinding(powerProfiles, "active_profile")
  const battery = AstalBattery.get_default()
  const batteryPercentage = createBinding(battery, "percentage")

  let revealer: Gtk.Revealer

  const profiles = {
    "power-saver": "power-profile-power-saver-symbolic",
    balanced: "power-profile-balanced-symbolic",
    performance: "power-profile-performance-symbolic",
  }

  return (
    <box orientation={ORIENTATION}>
      <button
        onClicked={() => revealer.set_reveal_child(!revealer.revealChild)}
      >
        <With value={batteryPercentage}>
          {(percent) => (
            <box orientation={ORIENTATION}>
              <label
                hexpand
                halign={Gtk.Align.CENTER}
                label={percent * 100 + "%"}
              />
              <levelbar value={percent} />
            </box>
          )}
        </With>
      </button>
      <revealer $={(ref) => (revealer = ref)}>
        <With value={profile}>
          {(active) => (
            <box orientation={ORIENTATION}>
              {Object.entries(profiles).map(([name, icon]) => (
                <button
                  onClicked={() => {
                    console.log("clicked", name)
                    powerProfiles.set_active_profile(name)
                  }}
                >
                  <box>
                    <image iconName={icon} />
                    <label label={name} />
                    <label
                      visible={name === active}
                      hexpand
                      halign={Gtk.Align.END}
                      label="✓"
                    />
                  </box>
                </button>
              ))}
            </box>
          )}
        </With>
      </revealer>
    </box>
  )
}
