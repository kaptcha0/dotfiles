const systemtray = await Service.import("systemtray");

export function SysTray() {
  const items = systemtray.bind("items").as((items) =>
    items.map((item) =>
      Widget.Button({
        child: Widget.Icon({ icon: item.bind("icon") }),
        on_primary_click: (_, event) => item.activate(event),
        on_secondary_click: (_, event) => item.openMenu(event),
        tooltip_markup: item.bind("tooltip_markup"),
        class_name: "button",
      }),
    ),
  );

  return Widget.Box({
    class_name: "container sys-tray",
    children: items,
  });
}
