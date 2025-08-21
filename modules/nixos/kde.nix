{
  config,
  lib,
  pkgs,
  ...
}:
let
  tuigreet = "${pkgs.tuigreet}/bin/tuigreet";
  # Replace with your desired Wayland compositor, e.g., "hyprland", "sway"
  session = "Hyprland";
in
{
  options = {
    kde.enable = lib.mkEnableOption "enables KDE";
  };

  config = lib.mkIf config.kde.enable {
    programs.kdeconnect.enable = true;
    services.desktopManager.plasma6.enable = true;

    environment.systemPackages = [ pkgs.tuigreet ];

    services.greetd = {
      enable = true;
      settings = {
        default_session = {
          command = "${tuigreet} --cmd '${session}'";
        };
      };
    };
  };
}
