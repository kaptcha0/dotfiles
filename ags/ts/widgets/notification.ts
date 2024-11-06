import { windowNames } from "@src/variables";

const notifications = await Service.import("notifications");

export function Notification() {
  const popups = notifications.bind("popups");

  return Widget.Button({
    class_name: "notif-btn container button",
    onClicked: (_) => App.toggleWindow(windowNames.notifications),
    child: Widget.Icon({
      icon: popups.as((p) =>
        p.length == 0
          ? "preferences-desktop-notification-bell"
          : "bell-outline-symbolic",
      ),
    }),
  });
}
