{
  config,
  lib,
  pkgs,
  ...
}:
  let cfg = config.wms.noctalia; in
{
  options.wms.noctalia.enable = lib.mkEnableOption "enable noctalia shell";

  config = lib.mkIf cfg.enable {
    stylix.targets.noctalia-shell.enable = true;
    programs.noctalia-shell = {
      enable = true;
      package = pkgs.emptyDirectory;
      settings = {
        appLauncher.enableClipboardHistory = true;
        location.name = "Fredericksburg, VA";
        dock.enabled = false;
        nightLight.enabled = true;
        brightness.enableDdcSupport = true;

        ui = {
          panelBackgroundOpacity = lib.mkForce 0.9;
        };

        general = {
          enableShadows = false;
          allowPasswordWithFprintd = true;
          lockScreenAnimations = true;
          compactLockScreen = true;
        };

        bar = {
          barType = "floating";
          frameRadius = 8;
        };

        wallpaper = {
          directory = "~/.dotfiles/configs/bgs";
          overviewEnabled = true;
        };
      };
    };
  };
}
