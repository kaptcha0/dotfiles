import { createPoll } from "ags/time"
import { With } from "ags"
import { RefreshProps, ORIENTATION } from "../common"
import AstalNetwork from "gi://AstalNetwork"
import AstalBluetooth from "gi://AstalBluetooth"
import AstalBattery from "gi://AstalBattery"

export default function ControlPanelModule() {
  const network = AstalNetwork.get_default()
  const bluetooth = AstalBluetooth.get_default()
  const battery = AstalBattery.get_default()
  const time = createPoll("", 1000, "date")

  const LanIcon = (_: RefreshProps) => {
    const iface = network.primary

    switch (iface) {
      case AstalNetwork.Primary.WIFI:
        return (
          <image
            tooltipText={"Connected: " + network.wifi.ssid}
            iconName={network.wifi.iconName}
          />
        )
      case AstalNetwork.Primary.WIRED:
        return (
          <image
            tooltipText={"Connected: " + network.wired.speed}
            iconName={network.wired.iconName}
          />
        )
      default:
        return (
          <image tooltipText="Disconnected" iconName={network.wifi.iconName} />
        )
    }
  }

  const BluetoothIcon = (_: RefreshProps) => {
    const icons = {
      active: "bluetooth-active",
      inactive: "bluetooth-inactive",
      paired: "bluetooth-paired",
    }

    if (bluetooth.isConnected) {
      const devicesTooltip = bluetooth.devices.map((d) => d.name)

      return (
        <image
          tooltipText={["Connected:", ...devicesTooltip].join("\n")}
          iconName={icons.paired}
        />
      )
    }

    if (bluetooth.isPowered) {
      return <image tooltipText="Bluetooth on" iconName={icons.active} />
    }

    return <image tooltipText="Bluetooth off" iconName={icons.inactive} />
  }

  const BatteryIcon = (_: RefreshProps) => {
    return (
      <image
        tooltipText={battery.percentage * 100 + "%"}
        iconName={battery.iconName}
      />
    )
  }

  return (
    <With value={time}>
      {(trigger) => (
        <button>
          <box orientation={ORIENTATION}>
            <LanIcon trigger={trigger} />
            <BluetoothIcon trigger={trigger} />
            <BatteryIcon trigger={trigger} />
          </box>
        </button>
      )}
    </With>
  )
}
