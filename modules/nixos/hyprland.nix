{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    hyprland = {
      enable = lib.mkEnableOption "Hyprland";
    };
  };

  config = lib.mkIf config.hyprland.enable {
    kaptcha0-bar.enable = true;

    programs.hyprland = {
      enable = true;
      xwayland.enable = true;
    };

    programs.hyprlock.enable = true;
    services.hypridle.enable = true;

    programs.nm-applet.enable = true;

    environment.sessionVariables = {
      # Just in case cursor becomes invisible
      WLR_NO_HARDWARE_CURSORS = "1";
      # Tells electron apps to use Wayland
      NIXOS_OZONE_WL = "1";
      XDG_SESSION_TYPE = "wayland";
      QT_QPA_PLATFORM = "wayland";
    };

    environment.systemPackages = with pkgs; [
      ags
      # notifs
      hyprnotify
      libnotify
      # wallpaper
      hyprpaper
      # utilities
      kdePackages.networkmanager-qt
      kdePackages.kdeconnect-kde
      kdePackages.bluedevil
      kdePackages.kservice

      xdg-utils
      shared-mime-info
      mime-types
      desktop-file-utils

      hyprland-qtutils
      hyprpolkitagent
      hypridle
      hyprsunset
      
      udiskie
      brightnessctl
      playerctl
      
      wl-clipboard
      cliphist
      pasystray
      pavucontrol
      easyeffects

      nwg-displays
      nwg-clipman
      swappy
      nwg-icon-picker
    ];

  };
}
