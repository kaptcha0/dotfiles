const hyprland = await Service.import("hyprland");

export function ClientTitle() {
  return Widget.Label({
    class_name: "client-title container",
    label: hyprland.active.client.bind("title"),
    maxWidthChars: 32,
    truncate: "middle",
    visible: hyprland.active.client.bind("title").as((t) => t.length != 0),
  });
}
