{
  config,
  lib,
  pkgs,
  inputs,
  ...
}:
let
  cfg = config.wms.noctalia;
in
{
  options.wms.noctalia.enable = lib.mkEnableOption "enable noctalia shell";

  config = lib.mkIf cfg.enable {
    stylix.targets.noctalia-shell.enable = false;

    home.packages = [
      pkgs.ddcutil
    ];

    programs.noctalia = {
      enable = true;
      package = (
        config.lib.nixGL.wrap inputs.noctalia.packages.${pkgs.stdenv.hostPlatform.system}.default
      );
      settings = {
        appLauncher.enableClipboardHistory = true;
        audio.enable_sounds = true;
        brightness.enableDdcSupport = true;
        control_center.sidebar = "full";
        dock.enabled = false;
        idle.pre_action_fade_seconds = 5;
        nightLight.enabled = true;
        notification.position = "top_center";
        ui.panelBackgroundOpacity = 0.9;

        location = {
          auto_locate = true;
          name = "Fredericksburg, VA";
        };

        theme = {
          mode = "dark";
          source = "wallpaper";
          wallpaper_scheme = "muted";
        };

        general = {
          allowPasswordWithFprintd = true;
          compactLockScreen = true;
          enableShadows = false;
          lockScreenAnimations = true;
        };

        wallpaper = {
          directory = "~/.dotfiles/configs/bgs";
          overviewEnabled = true;
          transition_on_startup = true;

          default.path = config.stylix.image;
        };

        shell = {
          niri_overview_type_to_launch_enabled = true;
          polkit_agent = true;
          screen_time_enabled = true;
          settings_show_advanced = true;

          screenshot.directory = "/home/kaptcha0/Pictures/Screenshots";
          shadow.direction = "center";

          panel = {
            control_center_placement = "floating";
            session_placement = "floating";
            transparency_mode = "glass";
            wallpaper_placement = "floating";
          };
        };

        widget = {
          brightness.show_label = false;
          network.show_label = false;
          notifications.hide_when_no_unread = true;
          volume.show_label = false;

          tray = {
            drawer = true;
            match_adjacent_spacing = true;
          };

          media = {
            hide_when_no_media = true;
            max_length = 256;
            title_scroll = "on_hover";
          };

          battery = {
            display_mode = "graphic";
            scale = 0.85;
            show_label = false;
          };
        };

        bar = {
          barType = "floating";
          frameRadius = 8;

          default = {
            background_opacity = 0.5;
            margin_edge = 0;
            margin_ends = 0;
            radius = 0;
            shadow = false;
            thickness = 32;
            widget_spacing = 8;

            start = [
              "launcher"
              "workspaces"
              "media"
            ];

            end = [
              "tray"
              "notifications"
              "clipboard"
              "network"
              "bluetooth"
              "volume"
              "battery"
              "session"
            ];
          };
        };

        lockscreen_widgets = {
          schema_version = 2;
          enabled = true;

          grid = {
            cell_size = 24;
            major_interval = 4;
            visible = true;
          };

          widget = {
            "lockscreen-login-box@HDMI-A-1" = {
              type = "login_box";
              box_height = 0;
              box_width = 0;
              cx = 960;
              cy = 957;
              rotation = 0;
            };

            lockscreen-widget-clock = {
              type = "clock";
              box_height = 208;
              box_width = 384;
              cx = 835;
              cy = 213.5;
              rotation = 0;
              settings = {
                background = false;
                clock_style = "digital";
                shadow = false;
              };
            };

            lockscreen-widget-media-player = {
              type = "media_player";
              box_height = 168;
              box_width = 168;
              cx = 931;
              cy = 565.5;
              rotation = 0;
              settings = {
                background = false;
                layout = "vertical";
                shadow = false;
              };
            };

            lockscreen-widget-audio-visualizer = {
              type = "fancy_audio_visualizer";
              box_height = 168;
              box_width = 168;
              cx = 739;
              cy = 565.5;
              rotation = 0;

              settings = {
                background = false;
                fade_when_idle = true;
              };
            };
            lockscreen-widget-greeting = {
              type = "label";
              box_height = 48;
              box_width = 288;
              cx = 835;
              cy = 325.5;
              rotation = 0;

              settings = {
                background = false;
                shadow = false;
                title = "hello kaptcha";
              };
            };
          };

          widget_order = [
            "lockscreen-login-box@HDMI-A-1"
            "lockscreen-widget-clock"
            "lockscreen-widget-media-player"
            "lockscreen-widget-audio-visualizer"
            "lockscreen-widget-greeting"
          ];
        };
      };
    };
  };
}
