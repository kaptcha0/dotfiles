import { Accessor, createBinding, createComputed, createState } from "ags"
import AstalBattery from "gi://AstalBattery"
import AstalPowerProfiles from "gi://AstalPowerProfiles"
import Gtk from "gi://Gtk?version=4.0"

const getBattery = () => {
  const battery = AstalBattery.get_default()
  const percentage: Accessor<string> = createBinding(
    battery,
    "percentage",
  )((p) => `${Math.round(p * 100)}%`)

  return { battery, percentage }
}

const BatteryDialog = () => {
  const { battery, percentage } = getBattery()
  const [revealed, setRevealed] = createState(false)
  const powerprofiles = AstalPowerProfiles.get_default()
  // const active = createBinding(powerprofiles, "activeProfile")

  const setProfile = (profile: string) => {
    powerprofiles.set_active_profile(profile)
  }

  return (
    <box orientation={Gtk.Orientation.VERTICAL}>
      <button onClicked={() => setRevealed(!revealed.get())}>
        <box orientation={Gtk.Orientation.VERTICAL}>
          <centerbox>
            <box $type="start">
              <label label={percentage} />
            </box>
            {/* <box $type="end">
              <label label={active} />
            </box> */}
          </centerbox>
          <levelbar
            orientation={Gtk.Orientation.HORIZONTAL}
            value={createBinding(battery, "percentage")}
          />
        </box>
      </button>
      {/* <revealer revealChild={revealed}>
        <box orientation={Gtk.Orientation.VERTICAL}>
          {powerprofiles.get_profiles().map(({ profile }) => (
            <button onClicked={() => setProfile(profile)}>
              <box>
                <label hexpand label={profile} xalign={0} />
                <image
                  visible={active((a) => a === profile)}
                  iconName="object-select-symbolic"
                />
              </box>
            </button>
          ))}
        </box>
      </revealer> */}
    </box>
  )
}

export default function BatteryModule() {
  const { battery, percentage } = getBattery()
  return (
    <menubutton>
      <image
        tooltipText={percentage}
        iconName={createBinding(battery, "batteryIconName")}
      />
      <popover widthRequest={256}>
        <BatteryDialog />
      </popover>
    </menubutton>
  )
}
