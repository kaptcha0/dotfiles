{
  osConfig,
  config,
  lib,
  ...
}:

{
  config = lib.mkIf osConfig.hyprland.enable {
    programs.hyprpanel = {
      enable = true;
      settings = {
        tear = true;
        scalingPriority = "gdk";
        notifications.position = "top";
        notifications.showActionOnHover = true;

        bar = {
          autoHide = "never";
          launcher.autoDetectIcon = true;
          workspaces.show_icons = false;
          clock.format = "%H.%M %Z";
          customModules.storage.paths = [
            "/"
          ];

          volume.label = false;
          battery.label = false;
          bluetooth.label = false;
          network.label = false;
          windowtitle.icon = false;
          media.show_active_only = true;

          layouts = {
            "*" = {
              left = [
                "dashboard"
                "workspaces"
                "media"
              ];
              middle = [ "windowtitle" ];
              right = [
                "volume"
                "battery"
                "network"
                "bluetooth"
                "clock"
                "notifications"
                "systray"
                "power"
              ];
            };
          };
        };

        menus = {
          clock.weather.unit = "metric";
          power.lowBatteryNotification = true;

          dashboard = {
            directories.enabled = false;
            stats.enable_gpu = false;
          };
        };

        theme = {
          font.name = "CaskaydiaCove Nerd Font Semilight";
          font.size = "16px";

          osd = {
            location = "top";
            orientation = "horizontal";
          };

          bar = {
            location = "top";
            transparent = true;
            floating = true;
            outer_spacing = "0";
            dropdownGap = "40px";

            buttons = {
              enableBorders = false;
              y_margins = "0";
              spacing = "4px";

              padding_x = "0.75rem";
              padding_y = "0.25rem";
            };
          };
        };
      };
    };

    home.file = {
      ".config/hypr" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/hypr";
        recursive = true;
      };
    };
  };
}
