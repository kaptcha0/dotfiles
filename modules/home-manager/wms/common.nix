rec {
  qs = [
    "/usr/bin/qs"
    "-p"
    "/etc/xdg/quickshell/noctalia-shell"
  ];
  noctalia =
    cmd:
    (
      qs
      ++ [
        "ipc"
        "call"
      ]
      ++ (builtins.filter builtins.isString (builtins.split " " cmd))
    );
  term = "kitty";
  launcher = noctalia "launcher toggle";
  locker = noctalia "lockScreen lock";
  file-browser = "nautilus";
  notes = "obsidian";
  browser = "zen-browser";
  editor = "zeditor";
}
