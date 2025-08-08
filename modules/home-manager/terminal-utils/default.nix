{ lib, config, ... }:

{
  imports = [
    ./git.nix
    ./zsh.nix
    ./helix.nix
    ./nushell.nix
    ./starship.nix
    ./tmux.nix
    ./mise.nix
    ./jujutsu.nix
  ];

  options = {
    terminal-utils-bundle.enable = lib.mkEnableOption "enable terminal utilities";
  };

  config = lib.mkIf config.terminal-utils-bundle.enable {
    git.enable = true;
    zsh.enable = true;
    helix.enable = true;
    nushell.enable = true;
    starship.enable = true;
    mise.enable = true;
    tmux.enable = true;
    jujutsu.enable = true;
  };
}
