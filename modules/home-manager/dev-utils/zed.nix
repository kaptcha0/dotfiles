{ lib, pkgs, config, osConfig, ... }:

{
  config = lib.mkIf osConfig.zed.enable {
    programs.zed-editor.enable = true;
    home.file.".config/zed" = {
      source = "${config.home.homeDirectory}/.dotfiles/configs/zed";
      recursive = true;
    };
  };
}
