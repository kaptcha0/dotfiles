import { createPoll } from "ags/time"
import { With } from "ags"
import { generateOnClicked, ORIENTATION } from "../common"
import Gtk from "gi://Gtk?version=4.0"

const Time = () => {
  const clock = createPoll("", 1000, "date")

  return (
    <With value={clock((v) => new Date(v))}>
      {(time: Date) => <label label={fmt(time)} />}
    </With>
  )
}

const CalendarWidget = () => {
  const date = createPoll("", 60 * 1000, "date")

  return (
    <box>
      <With value={date}>
        {(d) => (
          <box orientation={Gtk.Orientation.VERTICAL}>
            <label
              valign={Gtk.Align.CENTER}
              label={new Date(d).toLocaleDateString()}
            />
            <Gtk.Calendar />
          </box>
        )}
      </With>
    </box>
  )
}

export default function ClockModule() {
  return (
    <menubutton>
      <box orientation={ORIENTATION}>
        <Time />
      </box>
      <popover class="calendar">
        <CalendarWidget />
      </popover>
    </menubutton>
  )
}

const fmt = (date: Date) =>
  [
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getSeconds().toString().padStart(2, "0"),
  ].join(".")
