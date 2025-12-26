{
  config,
  lib,
  pkgs,
  ...
}:
let
  noctalia =
    cmd:
    [
      "qs"
      "-p"
      "/etc/xdg/quickshell/noctalia-shell"
      "ipc"
      "call"
    ]
    ++ (pkgs.lib.splitString " " cmd);
  term = "kitty";
  launcher = noctalia "launcher toggle";
  locker = noctalia "lockScreen lock";
  file-browser = "nautilus";
  notes = "obsidian";
  browser = "zen-browser";
  editor = "zeditor";
  qs = [
    "qs"
    "-p"
    "/etc/xdg/quickshell/noctalia-shell"
  ];
in
{
  options.niri.enable = lib.mkEnableOption "enable niri";

  config = lib.mkIf config.niri.enable {
    programs.niri = {
      enable = true;
      settings = {
        prefer-no-csd = true;

        input = {
          mod-key = "Super";
          focus-follows-mouse.enable = true;

          warp-mouse-to-focus = {
            enable = true;
            mode = "center-xy-always";
          };
        };

        spawn-at-startup = [
          {
            argv = qs;
          }
        ];

        layout = {
          gaps = 8;
          always-center-single-column = true;
          center-focused-column = "on-overflow";
          focus-ring.enable = false;

          border = {
            enable = true;
            width = 1;
          };

          default-column-width.proportion = 1. / 2.;

          preset-column-widths = [
            { proportion = 1. / 3.; }
            { proportion = 1. / 2.; }
            { proportion = 2. / 3.; }
            { proportion = 3. / 4.; }
          ];
        };

        window-rules = [
          {
            clip-to-geometry = true;
            geometry-corner-radius = {
              bottom-left = 8.;
              bottom-right = 8.;
              top-left = 8.;
              top-right = 8.;
            };
          }
        ];

        layer-rules = [
          {
            matches = [ { namespace = "^noctalia-overview"; } ];
            place-within-backdrop = true;
          }
        ];

        outputs = {
          "eDP-1".scale = 1.0;
        };

        binds = {
          "Mod+Shift+Slash".action.show-hotkey-overlay = { };

          "Mod+Return" = {
            hotkey-overlay.title = "open a terminal: ${term}";
            action.spawn = term;
          };

          "Mod+Space" = {
            hotkey-overlay.title = "open launcher";
            action.spawn = launcher;
          };

          "Mod+Comma" = {
            hotkey-overlay.title = "lock the screen";
            action.spawn = locker;
          };

          "Mod+E" = {
            hotkey-overlay.title = "open file explorer: ${file-browser}";
            action.spawn = file-browser;
          };

          "Mod+N" = {
            hotkey-overlay.title = "open notes app: ${notes}";
            action.spawn = notes;
          };

          "Mod+B" = {
            hotkey-overlay.title = "open browser: ${browser}";
            action.spawn = browser;
          };

          "Mod+W" = {
            hotkey-overlay.title = "open code editor: ${editor}";
            action.spawn = editor;
          };

          "Mod+Ctrl+V" = {
            hotkey-overlay.title = "open clipboard history";
            action.spawn = noctalia "launcher clipboard";
          };

          "Mod+Period" = {
            hotkey-overlay.title = "open emoji selector";
            action.spawn = noctalia "launcher emoji";
          };

          "Mod+S" = {
            hotkey-overlay.title = "open session manager";
            action.spawn = noctalia "sessionMenu toggle";
          };

          "Mod+Alt+R" = {
            hotkey-overlay.title = "restart noctalia";
            action.spawn = [
              "zsh"
              "-c"
              (
                (lib.strings.concatStringsSep " " qs) + " kill ; "
                + (lib.strings.concatStringsSep " " qs) + " & disown"
              )
            ];
          };

          "XF86AudioRaiseVolume" = {
            allow-when-locked = true;
            # action.spawn-sh = "wpctl set-volume @DEFAULT_AUDIO_SINK@ 0.1+ -l 1.0";
            action.spawn = noctalia "volume increase";
          };

          "XF86AudioLowerVolume" = {
            allow-when-locked = true;
            # action.spawn-sh = "wpctl set-volume @DEFAULT_AUDIO_SINK@ 0.1-";
            action.spawn = noctalia "volume decrease";
          };

          "XF86AudioMute" = {
            allow-when-locked = true;
            # action.spawn-sh = "wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle";
            action.spawn = noctalia "volume muteOutput";
          };

          "XF86AudioMicMute" = {
            allow-when-locked = true;
            # action.spawn-sh = "wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle";
            action.spawn = noctalia "volume muteInput";
          };

          "XF86AudioPlay" = {
            allow-when-locked = true;
            # action.spawn-sh = "playerctl play-pause";
            action.spawn = noctalia "media playPause";
          };

          "XF86AudioStop" = {
            allow-when-locked = true;
            # action.spawn-sh = "playerctl stop";
            action.spawn = noctalia "pause";
          };

          "XF86AudioPrev" = {
            allow-when-locked = true;
            # action.spawn-sh = "playerctl previous";
            action.spawn = noctalia "media previus";
          };

          "XF86AudioNext" = {
            allow-when-locked = true;
            # action.spawn-sh = "playerctl next";
            action.spawn = noctalia "media next";
          };

          "XF86MonBrightnessUp" = {
            allow-when-locked = true;
            # action.spawn = [
            #   "brightnessctl"
            #   "--class=backlight"
            #   "set"
            #   "+10%"
            # ];
            action.spawn = noctalia "brightness increase";
          };

          "XF86MonBrightnessDown" = {
            allow-when-locked = true;
            # action.spawn = [
            #   "brightnessctl"
            #   "--class=backlight"
            #   "set"
            #   "10%-"
            # ];
            action.spawn = noctalia "brightness decrease";
          };

          "Mod+O" = {
            repeat = false;
            action.toggle-overview = { };
          };

          "Mod+Q" = {
            repeat = false;
            action.close-window = { };
          };

          "Mod+H".action.focus-column-left = { };
          "Mod+J".action.focus-window-down = { };
          "Mod+K".action.focus-window-up = { };
          "Mod+L".action.focus-column-right = { };

          "Mod+Shift+H".action.move-column-left = { };
          "Mod+Shift+J".action.move-window-down = { };
          "Mod+Shift+K".action.move-window-up = { };
          "Mod+Shift+L".action.move-column-right = { };

          "Mod+Home".action.focus-column-first = { };
          "Mod+End".action.focus-column-last = { };

          "Mod+Shift+Home".action.move-column-to-first = { };
          "Mod+Shift+End".action.move-column-to-last = { };

          "Mod+Alt+H".action.focus-monitor-left = { };
          "Mod+Alt+J".action.focus-monitor-down = { };
          "Mod+Alt+K".action.focus-monitor-up = { };
          "Mod+Alt+L".action.focus-monitor-right = { };

          "Mod+Shift+Alt+H".action.move-column-to-monitor-left = { };
          "Mod+Shift+Alt+J".action.move-column-to-monitor-down = { };
          "Mod+Shift+Alt+K".action.move-column-to-monitor-up = { };
          "Mod+Shift+Alt+L".action.move-column-to-monitor-right = { };

          "Mod+Ctrl+Alt+H".action.move-workspace-to-monitor-left = { };
          "Mod+Ctrl+Alt+J".action.move-workspace-to-monitor-down = { };
          "Mod+Ctrl+Alt+K".action.move-workspace-to-monitor-up = { };
          "Mod+Ctrl+Alt+L".action.move-workspace-to-monitor-right = { };

          "Mod+Page_Down".action.focus-workspace-down = { };
          "Mod+Page_Up".action.focus-workspace-up = { };

          "Mod+Ctrl+Page_Down".action.move-column-to-workspace-down = { };
          "Mod+Ctrl+Page_Up".action.move-column-to-workspace-up = { };

          "Mod+Shift+Page_Down".action.move-workspace-down = { };
          "Mod+Shift+Page_Up".action.move-workspace-up = { };

          "Mod+WheelScrollRight".action.focus-column-right = { };
          "Mod+WheelScrollLeft".action.focus-column-left = { };
          "Mod+Ctrl+WheelScrollRight".action.move-column-right = { };
          "Mod+Ctrl+WheelScrollLeft".action.move-column-left = { };

          "Mod+Shift+WheelScrollDown".action.focus-column-right = { };
          "Mod+Shift+WheelScrollUp".action.focus-column-left = { };
          "Mod+Ctrl+Shift+WheelScrollDown".action.move-column-right = { };
          "Mod+Ctrl+Shift+WheelScrollUp".action.move-column-left = { };

          "Mod+BracketLeft".action.consume-or-expel-window-left = { };
          "Mod+BracketRight".action.consume-or-expel-window-right = { };

          "Mod+Ctrl+Comma".action.consume-window-into-column = { };
          "Mod+Ctrl+Period".action.expel-window-from-column = { };

          "Mod+R".action.switch-preset-column-width = { };
          "Mod+Shift+R".action.switch-preset-window-height = { };
          "Mod+Ctrl+R".action.switch-preset-column-width = { };
          "Mod+F".action.maximize-column = { };
          "Mod+Shift+F".action.fullscreen-window = { };

          "Mod+Ctrl+F".action.expand-column-to-available-width = { };
          "Mod+C".action.center-column = { };
          "Mod+Ctrl+C".action.center-visible-columns = { };

          "Mod+Minus".action.set-column-width = "-10%";
          "Mod+Equal".action.set-column-width = "+10%";
          "Mod+Shift+Minus".action.set-window-height = "-10%";
          "Mod+Shift+Equal".action.set-window-height = "+10%";

          "Mod+V".action.toggle-window-floating = { };
          "Mod+Shift+V".action.switch-focus-between-floating-and-tiling = { };

          "Mod+T".action.toggle-column-tabbed-display = { };

          "Print".action.screenshot = { };
          "Ctrl+Print".action.screenshot-screen = { };
          "Alt+Print".action.screenshot-window = { };

          "Mod+Escape" = {
            allow-inhibiting = true;
            action.toggle-keyboard-shortcuts-inhibit = { };
          };

          "Mod+Shift+E".action.quit = { };
          "Ctrl+Alt+Delete".action.quit = { };

          "Mod+Shift+P".action.power-off-monitors = { };
        };
      };
    };
  };
}
