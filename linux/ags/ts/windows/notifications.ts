import type { Notification as notif } from "resource:///com/github/Aylur/ags/service/notifications.js";
const notifications = await Service.import("notifications");
import { windowNames } from "@src/variables";

function NotificationIcon({ app_entry, app_icon, image }: notif) {
  if (image) {
    return Widget.Box({
      css:
        `background-image: url("${image}");` +
        "background-size: contain;" +
        "background-repeat: no-repeat;" +
        "background-position: center;",
    });
  }

  let icon = "dialog-information-symbolic";
  if (Utils.lookUpIcon(app_icon)) icon = app_icon;

  if (app_entry && Utils.lookUpIcon(app_entry)) icon = app_entry;

  return Widget.Box({
    child: Widget.Icon(icon),
  });
}

function Notification(n: notif) {
  const icon = Widget.Box({
    vpack: "start",
    class_name: "icon",
    child: NotificationIcon(n),
  });

  const title = Widget.Label({
    class_name: "title",
    xalign: 0,
    justification: "left",
    hexpand: true,
    max_width_chars: 24,
    truncate: "end",
    wrap: true,
    label: n.summary,
    use_markup: true,
  });

  const body = Widget.Label({
    class_name: "body",
    hexpand: true,
    use_markup: true,
    xalign: 0,
    justification: "left",
    label: n.body,
    wrap: true,
  });

  const actions = Widget.Box({
    class_name: "actions",
    children: n.actions.map(({ id, label }) =>
      Widget.Button({
        class_name: "action-button button",
        on_clicked: () => {
          n.invoke(id);
          n.dismiss();
        },
        hexpand: true,
        child: Widget.Label(label),
      }),
    ),
  });

  return Widget.EventBox(
    {
      attribute: { id: n.id },
      on_primary_click: n.dismiss,
    },
    Widget.Box(
      {
        class_name: `notification ${n.urgency}`,
        vertical: true,
      },
      Widget.Box([icon, Widget.Box({ vertical: true }, title, body)]),
      actions,
    ),
  );
}

export function NotificationPopups(monitor = 0) {
  const list = Widget.Box({
    vertical: true,
    children: notifications.popups.map(Notification),
  });

  const onNotified = (_, id: number) => {
    const n = notifications.getNotification(id);
    if (n) list.children = [Notification(n), ...list.children];
  };

  const onDismissed = (_, id: number) => {
    list.children.find((n) => n.attribute.id === id)?.destroy();
  };

  list
    .hook(notifications, onNotified, "notified")
    .hook(notifications, onDismissed, "dismissed");

  return Widget.Window({
    monitor,
    name: `notifications${monitor}`,
    class_name: "notification-popups",
    anchor: ["top"],
    hexpand: true,
    widthRequest: 128,
    child: Widget.Box({
      css: "min-width: 2px; min-height: 2px;",
      class_name: "notifications",
      vertical: true,
      child: list,
    }),
  });
}

export function NotificationWindow(monitor = 0) {
  return Widget.Window({
    monitor,
    visible: false,
    name: windowNames.notifications,
  });
}
