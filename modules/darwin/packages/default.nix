{ pkgs, config, ... }:

{
  imports = [
    ./dev.nix
    ./productivity.nix
  ];
}
