{ config, lib, pkgs, ... }:

{
  options = {
    xdg-conf.enable = lib.mkEnableOption "enable xdg";
  };
  config = lib.mkIf config.xdg-conf.enable {
    xdg.portal = {
      enable = true;
      xdgOpenUsePortal = true;
      config = {
        common = {
          default = [
            "hyprland"
            "kde"
          ];
          "org.freedesktop.impl.portal.FileChooser" = [ "kde" ];
        };
        Hyprland.default = [ "gtk" "wlr" "hyprland" ];
      };
      extraPortals = with pkgs; [
        xdg-desktop-portal-hyprland
        xdg-desktop-portal-gtk
        xdg-desktop-portal-wlr
        kdePackages.xdg-desktop-portal-kde
      ];
    };
  };
}
