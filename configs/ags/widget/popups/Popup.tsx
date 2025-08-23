import app from "ags/gtk4/app"
import { createState } from "gnim"
import { Anchors } from "../common"
import Graphene from "gi://Graphene?version=1.0"
import { Astal, Gdk, Gtk } from "ags/gtk4"

interface Props {
  name?: string
  class?: string
  valign?: Gtk.Align
  halign?: Gtk.Align
  children?: Gtk.Widget | JSX.Element
  onNotifyVisible?: (visible: boolean) => void
}

export default function PopupWindow({
  name,
  class: className,
  valign,
  halign,
  children,
  onNotifyVisible,
}: Props) {
  let contentbox: Gtk.Box
  let win: Astal.Window

  // close on ESC
  // handle alt + number key
  function onKey(
    _e: Gtk.EventControllerKey,
    keyval: number,
    _: number,
    mod: number,
  ) {
    if (keyval === Gdk.KEY_Escape) {
      win.visible = false
      return
    }
  }

  // close on clickaway
  function onClick(_e: Gtk.GestureClick, _: number, x: number, y: number) {
    const [, rect] = contentbox.compute_bounds(win)
    const position = new Graphene.Point({ x, y })

    if (!rect.contains_point(position)) {
      win.visible = false
      return true
    }
  }

  return (
    <window
      $={(ref) => (win = ref)}
      name={name}
      class={["Popup", className].join(" ")}
      keymode={Astal.Keymode.EXCLUSIVE}
      anchor={Anchors.TOP | Anchors.LEFT | Anchors.BOTTOM | Anchors.RIGHT}
      application={app}
      onNotifyVisible={({ visible }) => onNotifyVisible?.(visible)}
    >
      <Gtk.EventControllerKey onKeyPressed={onKey} />
      <Gtk.GestureClick onPressed={onClick} />
      <box $={(ref) => (contentbox = ref)} valign={valign} halign={halign}>
        {children}
      </box>
    </window>
  )
}
