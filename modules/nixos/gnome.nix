{
  config,
  lib,
  pkgs,
  ...
}:
{
  options = {
    gnome.enable = lib.mkEnableOption "enable gnome";
  };

  config = lib.mkIf config.gnome.enable {
    services.displayManager.gdm.enable = true;
    services.desktopManager.gnome.enable = true;
    services.gnome.gnome-browser-connector.enable = true;

    environment.systemPackages = with pkgs; [
      gnome-extension-manager
      gnomeExtensions.gsconnect
      qgnomeplatform-qt6
      qgnomeplatform
    ];

    # To disable installing GNOME's suite of applications
    # and only be left with GNOME shell.
    services.gnome.core-apps.enable = false;
    services.gnome.core-developer-tools.enable = false;
    services.gnome.games.enable = false;
    environment.gnome.excludePackages = with pkgs; [
      gnome-tour
      gnome-user-docs
    ];
  };
}
