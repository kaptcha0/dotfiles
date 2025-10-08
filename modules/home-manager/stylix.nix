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
    stylix = {
      enable = true;
      polarity = "dark";
      autoEnable = true;
      base16Scheme = inputs.self + /configs/themes/kanagawa.yaml;
      image = inputs.self + /configs/bgs/your-name-4k.jpg;
    };

    stylix.targets = {
      # starship.enable = false;
      qt.enable = true;
      obsidian.vaultNames = [ "pkm" ];
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
        name = "SFMono Nerd Font";
        package = apple-fonts.packages.${pkgs.system}.sf-mono-nerd;
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
  };
}
