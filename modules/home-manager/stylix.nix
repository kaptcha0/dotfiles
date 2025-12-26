{
  lib,
  config,
  pkgs,
  inputs,
  ...
}:

let
  icon-theme = (
    pkgs.whitesur-icon-theme.overrideAttrs {
      themeVariants = [ "green" ];
    }
  );
  apple-fonts = inputs.apple-fonts;
in
{
  options = {
    theming.enable = lib.mkEnableOption "enable theming";
  };

  config = lib.mkIf config.theming.enable {
    fonts.fontconfig.enable = lib.mkForce true;

    stylix = {
      enable = true;
      polarity = "dark";
      autoEnable = true;
      base16Scheme = inputs.self + /configs/themes/forestfoxpuccin.yaml;
      image = inputs.self + /configs/bgs/sea-train.png;
    };

    stylix.targets = {
      qt.enable = true;
      fontconfig.enable = true;
    };

    stylix.fonts = {
      serif = {
        name = "NewYork Nerd Font";
        package = apple-fonts.packages.${pkgs.system}.ny-nerd;
      };
      sansSerif = {
        name = "SFProDisplay Nerd Font";
        package = apple-fonts.packages.${pkgs.system}.sf-pro-nerd;
      };
      monospace = {
        # name = "SFMono Nerd Font";
        # package = apple-fonts.packages.${pkgs.system}.sf-mono-nerd;
        name = "Liga SFMono Nerd Font";
        package = pkgs.sf-mono-liga-bin;
      };
      sizes = {
        applications = 12;
        desktop = 10;
      };
    };

    stylix.icons = {
      enable = true;
      package = icon-theme;
      dark = "WhiteSur-dark";
      light = "WhiteSur-light";
    };

    stylix.cursor = {
      package = pkgs.volantes-cursors;
      name = "volantes_cursors";
      size = 24;
    };

    home.packages = with pkgs; [
      icon-theme
      corefonts
      vista-fonts
    ];

    home.file.bg = {
      target = ".config/stylix/bg";
      source = config.stylix.image;
    };
  };
}
