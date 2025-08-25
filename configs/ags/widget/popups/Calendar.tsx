import { Gtk } from "ags/gtk4"
import { Anchors, ORIENTATION } from "../common"
import { createPoll } from "ags/time"
import { With } from "ags"
import PopupWindow from "./Popup"

export default function CalendarWindow() {
  const date = createPoll("", 60 * 1000, "date")

  return (
    <PopupWindow
      name="calendar"
      valign={Gtk.Align.CENTER}
      halign={Gtk.Align.START}
    >
      <With value={date}>
        {(d) => (
          <box orientation={ORIENTATION}>
            <label valign={Gtk.Align.CENTER} label={fmt(d)} />
            <Gtk.Calendar />
          </box>
        )}
      </With>
    </PopupWindow>
  )
}

const fmt = (time: string) => {
  const date = new Date(time)

  return [
    date.getMonth().toString().padStart(2, "0"),
    date.getDate().toString().padStart(2, "0"),
    date.getFullYear().toString().padStart(4, "0"),
  ].join(".")
}
