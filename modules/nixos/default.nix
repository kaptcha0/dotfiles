{ lib, pkgs, config, ... }:

{
  imports = [
    ./kde.nix
    ./utils.nix
    ./gui-apps
  ];
}
