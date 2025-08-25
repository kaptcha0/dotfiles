import GObject from "ags/gobject"
import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"

export const ORIENTATION = Gtk.Orientation.VERTICAL

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
