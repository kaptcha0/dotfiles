{ lib, config, pkgs, ... }:

{
  options = {
    helix.enable = lib.mkEnableOption "enable helix editor";
  };

  config = lib.mkIf config.helix.enable {
    home.packages = with pkgs; [ helix ];

    programs.helix.defaultEditor = true;
    programs.helix.enable = true;

    home.file.".config/helix" = {
      source = "${config.home.homeDirectory}/.dotfiles/configs/helix";
      recursive = true;
    };
  };

}
