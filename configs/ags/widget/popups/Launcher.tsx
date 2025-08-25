import { For, createState } from "ags"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import AstalApps from "gi://AstalApps"
import Graphene from "gi://Graphene"
import PopupWindow from "./Popup"
import { ORIENTATION } from "../common"

export default function Applauncher() {
  let contentbox: Gtk.Box
  let searchentry: Gtk.Entry
  let win: Astal.Window

  const apps = new AstalApps.Apps()
  const [list, setList] = createState(new Array<AstalApps.Application>())

  function search(text: string) {
    if (text === "") setList([])
    else setList(apps.fuzzy_query(text).slice(0, 8))
  }

  function launch(app?: AstalApps.Application) {
    if (app) {
      win.hide()
      app.launch()
    }
  }

  // close on ESC
  // handle alt + number key
  function onKey(
    _e: Gtk.EventControllerKey,
    keyval: number,
    _: number,
    mod: number,
  ) {
    if (mod === Gdk.ModifierType.ALT_MASK) {
      for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9] as const) {
        if (keyval === Gdk[`KEY_${i}`]) {
          launch(list.get()[i - 1])
          return true
        }
      }
    }

    return false
  }

  return (
    <PopupWindow
      name="launcher"
      $={(ref) => (win = ref)}
      valign={Gtk.Align.CENTER}
      halign={Gtk.Align.CENTER}
      onKey={onKey}
      onNotifyVisible={(visible) => {
        if (visible) searchentry.grab_focus()
        else searchentry.set_text("")
      }}
    >
      <box
        $={(ref) => (contentbox = ref)}
        name="launcher-content"
        orientation={ORIENTATION}
        widthRequest={1080}
      >
        <entry
          $={(ref) => (searchentry = ref)}
          onNotifyText={({ text }) => search(text)}
          placeholderText="Start typing to search"
        />
        <Gtk.Separator visible={list((l) => l.length > 0)} />
        <box orientation={ORIENTATION}>
          <For each={list}>
            {(app, index) => (
              <button onClicked={() => launch(app)}>
                <box>
                  <image iconName={app.iconName} />
                  <label label={app.name} maxWidthChars={40} wrap />
                  <label
                    hexpand
                    halign={Gtk.Align.END}
                    label={index((i) => `󰘳  ${i + 1}`)}
                  />
                </box>
              </button>
            )}
          </For>
        </box>
      </box>
    </PopupWindow>
  )
}
