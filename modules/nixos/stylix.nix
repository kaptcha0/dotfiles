{
  lib,
  config,
  pkgs,
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
          package = pkgs.nerd-fonts.go-mono;
          name = "Noto Sans";
        };
        sansSerif = {
          package = pkgs.inter;
          name = "Inter var";
        };
        monospace = {
          package = pkgs.nerd-fonts.caskaydia-cove;
          name = "CaskaydiaMono Nerd Font";
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
