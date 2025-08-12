{
  osConfig,
  config,
  lib,
  ...
}:

{
  config = lib.mkIf osConfig.hyprland.enable {
    home.file = {
      ".config/hypr" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/hypr";
        recursive = true;
      };
      ".config/eww" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/eww";
        recursive = true;
      };
    };
  };
}
