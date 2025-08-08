{ config, lib, pkgs, ... }:

{
  options = {
    kde.enable = lib.mkEnableOption "enables KDE";
  };

  config = lib.mkIf config.kde.enable {
    services.displayManager.gdm.enable = true;
    services.displayManager.gdm.wayland = true;
    services.desktopManager.plasma6.enable = true;
  };
}
