{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    theming.enable = lib.mkEnableOption "enable themeing";
  };

  config = lib.mkIf config.theming.enable {
    home.packages = with pkgs; [
      libsForQt5.breeze-qt5
      libsForQt5.breeze-gtk
    ];

    gtk = {
      enable = true;
      theme.name = "Adwaita-Dark";
    };

    # qt = {
    #   enable = true;
    #   platformTheme.name = "gtk3";
    #   style.name = "adwaita-dark";
    # };

    dconf.enable = true;
    dconf.settings = {
      "org/gnome/desktop/interface".color-scheme = "prefer-dark";
    };
  };
}
