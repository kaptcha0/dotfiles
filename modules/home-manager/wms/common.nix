rec {
  qs = [
    "/home/kaptcha0/.nix-profile/bin/noctalia"
  ];
  noctalia =
    cmd:
    (
      qs
      ++ [
        "msg"
      ]
      ++ (builtins.filter builtins.isString (builtins.split " " cmd))
    );
  term = "ghostty";
  launcher = noctalia "panel-toggle launcher";
  locker = noctalia "session lock";
  clipboard = noctalia "panel-toggle clipboard";
  file-browser = "nautilus";
  notes = "obsidian";
  browser = "zen-browser";
  editor = "zeditor";

  settings = {
    opacity = {
      active = 0.95;
      inactive = 0.85;
    };
  };
}
