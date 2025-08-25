import AstalWp from "gi://AstalWp"
import PopupWindow from "./Popup"
import { Accessed, Accessor, createBinding, createState, For, With } from "ags"
import { Gtk } from "ags/gtk4"
import { exec } from "ags/process"
import { ORIENTATION } from "../common"

export default function MediaWindow() {
  const wp = AstalWp.get_default()

  const [speakers, setSpeakers] = createState<AstalWp.Endpoint[]>([])
  const [mics, setMics] = createState<AstalWp.Endpoint[]>([])

  wp.audio.connect("speaker-added", (_, speaker) => {
    setSpeakers([...speakers.get(), speaker])
  })

  wp.audio.connect("speaker-removed", (_, speaker) => {
    setSpeakers([...speakers.get().filter((s) => s.id !== speaker.id)])
  })

  wp.audio.connect("microphone-added", (_, mic) => {
    setMics([...mics.get(), mic])
  })

  wp.audio.connect("microphone-removed", (_, mic) => {
    setMics([...mics.get().filter((m) => m.id !== mic.id)])
  })

  return (
    <PopupWindow valign={Gtk.Align.END} halign={Gtk.Align.START} name="media">
      <box orientation={ORIENTATION}>
        <DeviceList devices={speakers} label="Outputs" />
        <DeviceList devices={mics} label="Inputs" />
      </box>
    </PopupWindow>
  )
}

function DeviceList({
  devices,
  label,
}: {
  devices: Accessor<AstalWp.Endpoint[]>
  label: string
}) {
  let deviceList: Gtk.Revealer
  const wp = AstalWp.get_default()

  return (
    <box orientation={ORIENTATION}>
      <button
        onClicked={() => (deviceList.revealChild = !deviceList.revealChild)}
      >
        <label label={label} />
      </button>
      <revealer $={(self) => (deviceList = self)} revealChild={false}>
        <box orientation={ORIENTATION}>
          <For each={devices}>
            {(device) => (
              <button
                css="background: transparent;"
                onClicked={() =>
                  exec(["wpctl", "set-default", device.id.toString()])
                }
              >
                <box orientation={ORIENTATION}>
                  <box>
                    <label label={device.description} />
                    <togglebutton
                      active={device.mute}
                      onClicked={() => device.set_mute(!device.mute)}
                      iconName={device.icon}
                      tooltipText={device.mute ? "Unmute" : "Mute"}
                    />
                  </box>
                  <revealer revealChild={device.isDefault}>
                    <slider
                      value={device.volume}
                      onChangeValue={(s, a, volume) =>
                        volumeChange(device, volume)
                      }
                    />
                  </revealer>
                </box>
              </button>
            )}
          </For>
        </box>
      </revealer>
    </box>
  )
}

export const volumeChange = (device: AstalWp.Endpoint, volume: number) => {
  if (device.mute) device.set_mute(false)
  if (device.volume == 0) device.set_mute(true)

  device.set_volume(volume)
}
