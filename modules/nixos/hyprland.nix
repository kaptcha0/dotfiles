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

      hyprland-qtutils
      hyprpolkitagent
      udiskie
      brightnessctl
      playerctl
      hyprsunset
      hyprshot
      wl-clipboard
      pasystray
      pavucontrol
      easyeffects
    ];

    xdg.portal = {
      enable = true;
      extraPortals = with pkgs; [
        xdg-desktop-portal
        xdg-desktop-portal-hyprland
        kdePackages.xdg-desktop-portal-kde
      ];
    };
  };
}
