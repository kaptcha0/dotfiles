{
  lib,
  config,
  ...
}:

{
  options = {
    tmux.enable = lib.mkEnableOption "enable tmux terminal";
  };

  config = lib.mkIf config.tmux.enable {
    programs.tmux.enable = true;

    home.file = {
      ".config/tmux" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/tmux";
        recursive = true;
      };
    };
  };
}
