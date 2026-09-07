{ pkgs, ... }:

{
  environment.systemPackages = with pkgs; [
    zed-editor
    ghostty-bin
    helix
    zellij
  ];
}
