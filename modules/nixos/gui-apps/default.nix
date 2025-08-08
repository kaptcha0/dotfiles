{ lib, pkgs, config, ... }:

{
  imports = [
    ./dev-apps.nix
    ./browsing.nix
    ./creative-apps.nix
  ];

  options = {
    gui-apps-bundle.enable = lib.mkEnableOption "enable GUI apps";
  };

  config = lib.mkIf config.gui-apps-bundle.enable {
    zed.enable = true;
    vscode.enable = true;
    warp.enable = true;

    zen.enable = true;
    brave.enable = true;
    vivaldi.enable = true;
    firefox.enable = true;

    creative-apps.music.enable = true;
    creative-apps.video.enable = true;
    creative-apps.photo.enable = true;
  };
}
