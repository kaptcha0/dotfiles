import AstalWp from "gi://AstalWp"
import { createBinding, With } from "ags"
import { ORIENTATION } from "../common"

export default function MediaModule() {
  const wp = AstalWp.get_default()
  // const { defaultSpeaker, defaultMicrophone } = wp.audio

  // const volumeIcon = createBinding(defaultSpeaker, "volumeIcon")
  // const micIcon = createBinding(defaultMicrophone, "volumeIcon")
  //
  const audio = createBinding(wp, "audio")

  return (
    <button>
      <With value={audio}>
        {({ defaultSpeaker, defaultMicrophone }) => (
          <box orientation={ORIENTATION}>
            {/*<With value={volumeIcon}>
              {(iconName) => <image iconName={iconName} />}
            </With>
            <With value={micIcon}>
              {(iconName) => <image iconName={iconName} />}
            </With>*/}

            <image iconName={defaultSpeaker.volumeIcon} />
            <image iconName={defaultMicrophone.volumeIcon} />
          </box>
        )}
      </With>
    </button>
  )
}
