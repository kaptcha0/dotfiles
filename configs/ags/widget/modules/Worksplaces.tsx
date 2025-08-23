import { createBinding, With } from "ags"
import { ORIENTATION } from "../common"
import AstalHyprland from "gi://AstalHyprland"

export default function WorkspacesModule() {
  const hyprland = AstalHyprland.get_default()
  const currentWorkspace = createBinding(hyprland, "focusedWorkspace")

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
