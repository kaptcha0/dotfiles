import GObject from "ags/gobject"
import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import { createPoll } from "ags/time"
import { With } from "gnim"

export const ORIENTATION = Gtk.Orientation.HORIZONTAL

const { TOP, LEFT, BOTTOM, RIGHT } = Astal.WindowAnchor

export const Anchors = {
  TOP,
  LEFT,
  BOTTOM,
  RIGHT,
}

export interface RefreshProps {
  trigger: string
}

interface Windows {
  [key: string]: {
    name: string
    widget: (...args: any[]) => GObject.Object
  }
}

export function generateOnClicked(name: string) {
  return () => {
    const popup = app.get_window(name)

    if (!popup) return

    popup.visible = !popup.visible
  }
}

export const Refresh = ({
  interval = 1000,
  children,
}: {
  interval?: number
  children: (JSX.Element | Gtk.Widget)[] | JSX.Element | Gtk.Widget
}) => {
  const time = createPoll("", interval, "date")

  return <With value={time}>{(t) => <box>{children}</box>}</With>
}
