import { Astal, Gtk } from "ags/gtk4"
import AstalNotifd from "gi://AstalNotifd"
import Notification from "../modules/Notification"
import { For, createState, onCleanup } from "ags"
import Gdk from "gi://Gdk?version=4.0"

interface Props {
  monitor: Gdk.Monitor
}

export default function NotificationPopups({ monitor }: Props) {
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

  const resolvedHandler = notifd.connect("resolved", (_, id) => {
    setNotifications((ns) => ns.filter((n) => n.id !== id))
  })

  onCleanup(() => {
    notifd.disconnect(notifiedHandler)
    notifd.disconnect(resolvedHandler)
  })

  return (
    <window
      $={(self) => self && onCleanup(() => self.destroy())}
      gdkmonitor={monitor}
      class="NotificationPopups"
      visible={notifications((ns) => ns.length > 0)}
      anchor={Astal.WindowAnchor.TOP}
    >
      <box orientation={Gtk.Orientation.VERTICAL}>
        <For each={notifications}>
          {(notification) => (
            <Notification
              timeout={
                notification.expire_timeout == -1
                  ? 5 * 1000
                  : notification.expire_timeout
              }
              notification={notification}
            />
          )}
        </For>
      </box>
    </window>
  )
}
