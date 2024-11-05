import { windowNames } from "@src/variables";
const audio = await Service.import("audio");
const battery = await Service.import("battery");

export function ControlPanel() {
  return Widget.Button({
    class_name: "container button ctrl-panel",
    onClicked: (_) => App.toggleWindow(windowNames.controlPanel),
    child: Widget.Box({
      spacing: 8,
      children: [Volume(), Battery()],
    }),
  });
}

export function Volume() {
  const icons = {
    101: "overamplified",
    67: "high",
    34: "medium",
    1: "low",
    0: "muted",
  };

  const getIcon = () => {
    const icon = audio.speaker.is_muted
      ? 0
      : [101, 67, 34, 1, 0].find(
          (threshold) => threshold <= audio.speaker.volume * 100,
        );

    return `audio-volume-${icons[icon ?? 0]}-symbolic`;
  };

  return Widget.Icon({
    icon: Utils.watch(getIcon(), audio.speaker, getIcon),
    class_name: "volume",
    tooltipText: audio.speaker
      .bind("volume")
      .as((volume) => `${Math.round(volume * 100)}%`),
  });
}

export function Battery() {
  const value = battery.bind("percent").as((p) => (p > 0 ? p / 100 : 0));
  const icon = battery
    .bind("percent")
    .as((p) => `battery-level-${Math.floor(p / 10) * 10}-symbolic`);

  const batt_data = Utils.merge(
    [
      battery.bind("charging"),
      battery.bind("charged"),
      battery.bind("percent"),
    ],
    (charging, charged, percent) => ({ charging, charged, percent }),
  );

  return Widget.Icon({
    class_name: batt_data.as(({ charging, charged, percent }) => {
      const arr = ["battery"];

      if (charging || charged) {
        if (charged) arr.push("perfect");
        if (charging) arr.push("low");
      } else {
        if (percent <= 75) arr.push("normal");
        if (percent <= 50) arr.push("warning");
        if (percent <= 25) arr.push("critical");
      }

      return arr.join(" ");
    }),
    visible: battery.bind("available"),
    tooltipText: battery.bind("percent").as((percent) => `${percent}%`),
    icon,
  });
}
