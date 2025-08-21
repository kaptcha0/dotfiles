{
  lib,
  osConfig,
  ...
}:

{
  config = lib.mkIf osConfig.theming.enable {
    stylix.targets = {
      starship.enable = false;
      qt.platform = "qtct";

      zen-browser.profileNames = [ "default" ];
    };
  };
}
