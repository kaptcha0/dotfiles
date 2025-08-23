import GObject from "ags/gobject"
import { Astal, Gtk } from "ags/gtk4"

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
