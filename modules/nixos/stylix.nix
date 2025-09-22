{
  lib,
  config,
  pkgs,
  apple-fonts,
  ...
}:

{
  options = {
    theming.enable = lib.mkEnableOption "enable theming";
  };

  config = lib.mkIf config.theming.enable {
    stylix = {
      enable = true;
      polarity = "dark";
      autoEnable = true;
      base16Scheme = /home/kaptcha0/.dotfiles/configs/themes/aquamarine-gold-soft-dark.yaml;
      image = /home/kaptcha0/.dotfiles/configs/bgs/default;

      fonts = {
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

      cursor = {
        package = pkgs.volantes-cursors;
        name = "volantes_cursors";
        size = 24;
      };
    };
  };
}
