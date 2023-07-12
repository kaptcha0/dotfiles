{ pkgs }:
{
  packages = with pkgs; [
    ansible
    bat
    binutils
    coreutils-full
    exa
    fd
    fzf
    gh
    htop
    lazydocker
    lazygit
    ripgrep
    starship
    tmux
    tree
    viddy
  ];
}
