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
    programs.hyprland = {
      enable = true;
      xwayland.enable = true;
    };

    programs.hyprlock.enable = true;

    environment.sessionVariables = {
      # Just in case cursor becomes invisible
      WLR_NO_HARDWARE_CURSORS = "1";
      # Tells electron apps to use Wayland
      NIXOS_OZONE_WL = "1";
    };

    environment.systemPackages = with pkgs; [
      eww
      # launcher
      walker
      # notifs
      dunst
      libnotify
      # wallpaper
      swww
      # utilities
      kdePackages.networkmanager-qt
      kdePackages.kdeconnect-kde
      kdePackages.bluedevil

      hyprpolkitagent
      udiskie
      brightnessctl
      playerctl
      hyprsunset
      hyprshot
      wl-clipboard
    ];

    xdg.portal = {
      enable = true;
      extraPortals = [ pkgs.xdg-desktop-portal-hyprland ];
    };
  };
}
