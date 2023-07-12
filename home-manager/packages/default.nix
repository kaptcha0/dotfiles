{ pkgs, ... }:
let
  corePackages = (import ./core.nix {
    inherit pkgs;
  }).packages;

  cyberSecPackages = (import ./cybersec.nix {
    inherit pkgs;
  }).packages;

  devPackages = (import ./dev.nix {
    inherit pkgs;
  }).packages;

  guiPackages = (import ./gui.nix {
    inherit pkgs;
  }).packages;

  miscPackages = (import ./misc.nix {
    inherit pkgs;
  }).packages;
in
{
  # The packages option allows you to install Nix packages into your
  # environment.
  home.packages = corePackages ++ cyberSecPackages ++ devPackages ++ guiPackages ++ miscPackages;
}
