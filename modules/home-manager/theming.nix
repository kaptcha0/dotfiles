{
  lib,
  pkgs,
  osConfig,
  ...
}:

let
  icon-theme = (
    pkgs.fluent-icon-theme.overrideAttrs {
      roundedIcons = true;
      colorVariants = [ "green" ];
    }
  );
in
{
  config = lib.mkIf osConfig.theming.enable {
    stylix.targets = {
      starship.enable = false;
      kitty.enable = true;

      zen-browser.profileNames = [ "default" ];
    };


    stylix.icons = {
      enable = true;
      package = icon-theme;
      dark = "Fluent";
      light = "Fluent";
    };

    home.packages = [ icon-theme ];
  };
}
