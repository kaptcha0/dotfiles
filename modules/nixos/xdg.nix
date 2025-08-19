{ config, lib, ... }:

{
  options = {
    xdg.enable = lib.mkEnableOption "enable xdg";
  };
  config = lib.mkIf config.xdg.enable {
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
      };
    };
  };
}
