import { createPoll } from "ags/time"
import { With, For, createBinding, createState, onCleanup } from "ags"
import { generateOnClicked, ORIENTATION } from "../common"
import Gtk from "gi://Gtk?version=4.0"
import AstalNotifd from "gi://AstalNotifd"
import Notification from "./Notification"

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

const Notifications = () => {
  const notifd = AstalNotifd.get_default()
  
  const [notifications, setNotifications] = createState(
    new Array<AstalNotifd.Notification>(),
  )

  const notifiedHandler = notifd.connect("notified", (_, id, replaced) => {
    const notification = notifd.get_notification(id)

    if (replaced && notifications.get().some((n) => n.id === id)) {
      setNotifications((ns) => ns.map((n) => (n.id === id ? notification : n)))
    } else {
      setNotifications((ns) => [notification, ...ns])
    }
  })

  onCleanup(() => {
    notifd.disconnect(notifiedHandler)
  })

  return (
    <box orientation={Gtk.Orientation.VERTICAL}>
      <label label="Notifications" />
      <With value={notifications}>
        {(notifications) => (
          <scrolledwindow minContentWidth={400} maxContentWidth={400} minContentHeight={256}>
            <box orientation={Gtk.Orientation.VERTICAL}>
              {notifications.map((notification) => (
                <Notification onClose={() => setNotifications((ns) => ns.filter((n) => n.id !== notification.id))} notification={notification} />
              ))}
            </box>
          </scrolledwindow>
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
        <box>
          <CalendarWidget />
          <Gtk.Separator visible orientation={Gtk.Orientation.VERTICAL} />
          <Notifications />
        </box>
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
