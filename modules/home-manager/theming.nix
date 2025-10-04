{
  lib,
  pkgs,
  osConfig,
  ...
}:

let
  icon-theme = (
    pkgs.whitesur-icon-theme.overrideAttrs {
      themeVariants = [ "green" ];
    }
  );
in
{
  config = lib.mkIf osConfig.theming.enable {
    stylix.targets = {
      starship.enable = false;

      zen-browser.profileNames = [ "default" ];
    };


    stylix.icons = {
      enable = true;
      package = icon-theme;
      dark = "WhiteSur-dark";
      light = "WhiteSur-light";
    };

    home.packages = [ icon-theme ];
  };
}
