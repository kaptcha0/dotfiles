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
    fonts.fontconfig.enable = true;
    fonts.fontconfig.defaultFonts = {
      serif = [ "GoMono Nerd Font" ];
      sansSerif = [
        "Iosevka Nerd Font"
        "Noto Nerd Font"
        "Noto Sans"
      ];
      monospace = [
        "Hurmit Nerd Font"
        "Noto Sans Mono"
      ];
    };

    home.packages = with pkgs; [
      libsForQt5.breeze-qt5
      libsForQt5.breeze-gtk

      volantes-cursors

      nerd-fonts.iosevka
      nerd-fonts.hurmit
      nerd-fonts.noto
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
