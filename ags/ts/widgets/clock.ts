const date = Variable("", {
  poll: [1000, 'date "+%H.%M.%S"'],
});

export function Clock() {
  return Widget.Button({
    class_name: "container button clock",
    child: Widget.Label({
      label: date.bind(),
      heightRequest: 16,
    }),
  });
}
