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
    };
  };
}
