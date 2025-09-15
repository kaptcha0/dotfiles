{
  osConfig,
  config,
  lib,
  ...
}:

let
  link = config.lib.file.mkOutOfStoreSymlink;
in
{
  config = lib.mkIf osConfig.hyprland.enable {
    home.file = {
      ".config/hypr" = {
        source = link "${config.home.homeDirectory}/.dotfiles/configs/hypr";
        recursive = true;
      };
    };
  };
}
