import { createPoll } from "ags/time"
import { With } from "ags"
import { ORIENTATION } from "../common"
import app from "ags/gtk4/app"

export default function ClockModule() {
  const clock = createPoll("", 1000, "date")

  return (
    <With value={clock}>
      {(time) => {
        return (
          <button onClicked={onClicked}>
            <box orientation={ORIENTATION}>
              {fmt(time).map((t) => (
                <label label={t} />
              ))}
            </box>
          </button>
        )
      }}
    </With>
  )
}

const fmt = (time: string) => {
  const date = new Date(time)

  return [
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getSeconds().toString().padStart(2, "0"),
  ]
}

const onClicked = () => {
  const calendarWidget = app.get_window("calendar")

  if (!calendarWidget) return

  calendarWidget.visible = !calendarWidget.visible
}
