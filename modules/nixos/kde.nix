{
  config,
  lib,
  ...
}:

{
  options = {
    kde.enable = lib.mkEnableOption "enables KDE";
  };

  config = lib.mkIf config.kde.enable {
    programs.kdeconnect.enable = true;
    services.desktopManager.plasma6.enable = true;
  };
}
