{
  lib,
  osConfig,
  ...
}:

{
  config = lib.mkIf osConfig.theming.enable {
    stylix.targets.starship.enable = false;
    stylix.targets.qt.platform = "qtct";
    # stylix.targets.zed.enable = false;
  };
}
