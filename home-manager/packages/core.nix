{ pkgs }:
{
  packages = with pkgs; [
    ansible
    bat
    binutils
    coreutils-full
    eza
    fd
    fzf
    htop
    lazydocker
    lazygit
    ripgrep
    subversion
    tree
    viddy
  ];
}
