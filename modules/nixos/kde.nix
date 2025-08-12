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
    services.displayManager.sddm.enable = true;
    services.displayManager.sddm.wayland.enable = true;
    services.desktopManager.plasma6.enable = true;
  };
}
