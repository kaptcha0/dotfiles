{
  config,
  lib,
  pkgs,
  ...
}:

let
  qtPlatform = "qt5ct";
in
{
  options = {
    kde.enable = lib.mkEnableOption "enables KDE";
  };

  config = lib.mkIf config.kde.enable {
    programs.kdeconnect.enable = true;

    services.xserver.enable = true; # optional
    services.displayManager.sddm.enable = true;
    services.displayManager.sddm.wayland.enable = true;
    services.desktopManager.plasma6.enable = true;

    environment.systemPackages = with pkgs.kdePackages; [ qtstyleplugin-kvantum ];

    stylix.targets.qt.enable = false;
    # stylix.targets.qt.platform = lib.mkForce qtPlatform;
    qt = {
      style = "kvantum";
      platformTheme = qtPlatform;
      enable = true;
    };

    # environment.variables = {
    #   QT_QPA_PLATFORMTHEME = qtPlatform;
    #   QT_STYLE_OVERRIDE = "kvantum"; # if you want style = kvantum
    # };

  };
}
