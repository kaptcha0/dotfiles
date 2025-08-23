import { createPoll } from "ags/time"
import { With } from "ags"
import { ORIENTATION } from "../common"

export default function ClockModule() {
  const clock = createPoll("", 1000, "date")

  const fmt = (time: string) => {
    const date = new Date(time)

    return [
      date.getHours().toString().padStart(2, "0"),
      date.getMinutes().toString().padStart(2, "0"),
      date.getSeconds().toString().padStart(2, "0"),
    ]
  }

  return (
    <With value={clock}>
      {(time) => {
        return (
          <button>
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
