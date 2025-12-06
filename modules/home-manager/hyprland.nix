{
  config,
  pkgs,
  lib,
  inputs,
  ...
}:

{
  options = {
    hyprland.enable = lib.mkEnableOption "enable hyprland";
  };

  config = lib.mkIf config.hyprland.enable {
    wayland.windowManager.hyprland = {
      enable = true;
      # set the flake package
      package = null;
      portalPackage = null;
      extraConfig = builtins.readFile (inputs.self + /configs/hypr/hyprland.conf);
    };

    services.network-manager-applet = {
      enable = true;
      # package = null;
      package = (config.lib.nixGL.wrap pkgs.networkmanagerapplet);
    };

    services.blueman-applet = {
      enable = true;
      # package = null;
      package = (config.lib.nixGL.wrap pkgs.blueman);
    };

    programs.hyprlock = {
      enable = true;
      # package = null;
      # package = (config.lib.nixGL.wrap pkgs.hyprlock);
      extraConfig = builtins.readFile (inputs.self + /configs/hypr/hyprlock.conf);
    };

    services.hyprpaper = {
      enable = true;
      package = null;
      settings = { };
    };

    services.hyprsunset = {
      enable = true;
      package = pkgs.emptyDirectory;
      # package = null;
      settings = {
        max-gamma = 150;

        profile = [
          {
            time = "7:30";
            identity = true;
          }
          {
            time = "18:00";
            temperature = 3100;
            gamma = 0.8;
          }
          {
            time = "21:00";
            temperature = 5000;
            gamma = 0.8;
          }
        ];
      };
    };

    home.sessionVariables = {
      NIXOS_OZONE_WL = "1";
      XDG_SESSION_TYPE = "wayland";
      # QT_QPA_PLATFORM = "wayland";
    };

    home.packages = with pkgs; [
      (config.lib.nixGL.wrap quickshell)

      # notifs
      (config.lib.nixGL.wrap hyprnotify)
      libnotify
      # utilities
      # (config.lib.nixGL.wrap networkmanagerapplet)
      # (config.lib.nixGL.wrap blueman)
      (config.lib.nixGL.wrap kdePackages.kdeconnect-kde)
      # kdePackages.bluedevil
      # kdePackages.kservice

      xdg-utils
      shared-mime-info
      mime-types
      desktop-file-utils

      hyprland-qtutils
      hyprpolkitagent
      hypridle
      # hyprshot

      udiskie
      brightnessctl
      playerctl

      wl-clipboard
      cliphist
      (config.lib.nixGL.wrap pasystray)
      (config.lib.nixGL.wrap pavucontrol)
      (config.lib.nixGL.wrap easyeffects)

      (config.lib.nixGL.wrap nwg-displays)
      # (config.lib.nixGL.wrap nwg-clipman)
      (config.lib.nixGL.wrap swappy)
      # (config.lib.nixGL.wrap nwg-icon-picker)
    ];

    services.swaync = {
      enable = true;
      package = (config.lib.nixGL.wrap pkgs.swaynotificationcenter);
      # package = pkgs.emptyDirectory;
      style = # css
        ''
          :root {
            --border-radius: 8px;
            --notification-shadow: none,
          }
        '';
    };

  };
}
