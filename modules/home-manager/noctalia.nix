{
  config,
  lib,
  pkgs,
  ...
}:
{
  options.noctalia.enable = lib.mkEnableOption "enable noctalia shell";

  config = lib.mkIf config.noctalia.enable {
    programs.noctalia-shell = {
      enable = true;
      package = pkgs.emptyDirectory;
      settings = {
        wallpaper.directory = "~/.dotfiles/configs/bgs";
        wallpaper.overviewEnabled = true;
        general.enableShadows = false;
        appLauncher.enableClipboardHistory = true;
        location.name = "Fredericksburg, VA";
        dock.enabled = false;
        nightLight.enabled = true;
      };
    };
  };
}
