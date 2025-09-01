import app from "ags/gtk4/app"
import { createState, onCleanup } from "ags"
import { Anchors } from "../common"
import Graphene from "gi://Graphene?version=1.0"
import { Astal, Gdk, Gtk } from "ags/gtk4"

interface Props {
  name?: string
  class?: string
  valign?: Gtk.Align
  halign?: Gtk.Align
  children?: Gtk.Widget | JSX.Element
  widthRequest?: number
  heightRequest?: number

  onNotifyVisible?: (visible: boolean) => void
  onKey?: (
    _e: Gtk.EventControllerKey,
    keyval: number,
    _: number,
    mod: number,
  ) => boolean
  onClick?: (_e: Gtk.GestureClick, _: number, x: number, y: number) => boolean
  $?: (self: Astal.Window) => void
}

type PopupProps = Props & Partial<Astal.Window.ConstructorProps>

export default function PopupWindow({
  name,
  class: className,
  valign,
  halign,
  widthRequest,
  heightRequest,
  children,
  onNotifyVisible,
  onKey: oK,
  onClick: oC,
  $,
  ...args
}: PopupProps) {
  let contentbox: Gtk.Box
  let win: Astal.Window

  onCleanup(() => {
    win.destroy()
  })

  // close on ESC
  // handle alt + number key
  function onKey(
    _e: Gtk.EventControllerKey,
    keyval: number,
    _: number,
    mod: number,
  ) {
    if (oK?.(_e, keyval, _, mod)) return

    if (keyval === Gdk.KEY_Escape) {
      win.visible = false
      return
    }
  }

  // close on clickaway
  function onClick(_e: Gtk.GestureClick, _: number, x: number, y: number) {
    const [, rect] = contentbox.compute_bounds(win)
    const position = new Graphene.Point({ x, y })

    if (oC?.(_e, _, x, y)) return

    if (!rect.contains_point(position)) {
      win.visible = false
      return true
    }
  }

  return (
    <window
      $={(ref) => {
        win = ref
        $?.(ref)
      }}
      name={name}
      class={["Popup", className].join(" ")}
      keymode={Astal.Keymode.EXCLUSIVE}
      anchor={Anchors.TOP | Anchors.LEFT | Anchors.BOTTOM | Anchors.RIGHT}
      application={app}
      onNotifyVisible={({ visible }) => onNotifyVisible?.(visible)}
      {...args}
    >
      <Gtk.EventControllerKey onKeyPressed={onKey} />
      <Gtk.GestureClick onPressed={onClick} />
      <box
        widthRequest={widthRequest}
        heightRequest={heightRequest}
        $={(ref) => (contentbox = ref)}
        valign={valign}
        halign={halign}
      >
        {children}
      </box>
    </window>
  )
}
