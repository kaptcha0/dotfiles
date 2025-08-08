{ lib, config, pkgs, ... }:

{
  options = {
    tmux.enable = lib.mkEnableOption "enable tmux";
  };

  config = lib.mkIf config.tmux.enable {
    home.packages = with pkgs; [ tmux ];

    programs.tmux.enable = true;

    home.file.".config/tmux" = {
      source = "${config.home.homeDirectory}/.dotfiles/configs/tmux";
      recursive = true;
    };
  };

}
