{
  lib,
  config,
  inputs,
  pkgs,
  ...
}:

{
  options = {
    tmux.enable = lib.mkEnableOption "enable tmux terminal";
  };

  config = lib.mkIf config.tmux.enable {
    programs.tmux.enable = true;
    programs.tmux.package = pkgs.emptyDirectory;

    home.file = {
      ".config/tmux" = {
        source = inputs.self + /configs/tmux;
        recursive = true;
      };
    };
  };
}
