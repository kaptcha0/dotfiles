{ pkgs }:
{
  packages = with pkgs; [
    ansible
    bat
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
