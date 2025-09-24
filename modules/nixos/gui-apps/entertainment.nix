{
  config,
  lib,
  pkgs,
  inputs,
  ...
}:
{
  options = {
    spotify.enable = lib.mkEnableOption "enable spotify";
    spotify.useSpicetify = lib.mkOption {
      type = lib.types.bool;
      default = false;
      description = "enable spicetify for theming";
    };
    boxes.enable = lib.mkEnableOption "enable boxes";
    steam-run.enable = lib.mkEnableOption "enable steam-run";
    steam.enable = lib.mkEnableOption "enable steam";

    matrix.enable = lib.mkEnableOption "enable matrix client";
  };

  config = {
    programs.spicetify =
      let
        spicePkgs = inputs.spicetify-nix.legacyPackages.${pkgs.stdenv.hostPlatform.system};
      in
      {
        enable = config.spotify.useSpicetify;
        enabledExtensions = with spicePkgs.extensions; [
          adblock
        ];
      };

    # Enable libvirt for user and session
    virtualisation.libvirtd.enable = true;

    programs.steam = lib.mkIf config.steam.enable {
      enable = true;
      remotePlay.openFirewall = true; # Open ports in the firewall for Steam Remote Play
      dedicatedServer.openFirewall = true; # Open ports in the firewall for Source Dedicated Server
      localNetworkGameTransfers.openFirewall = true; # Open ports in the firewall for Steam Local Network Game Transfers
    };

    environment.systemPackages =
      with pkgs;
      [
        (lib.mkIf config.boxes.enable gnome-boxes)
        (lib.mkIf config.steam-run.enable steam-run)
        (lib.mkIf config.matrix.enable fluffychat)
      ]
      ++ lib.optional (config.spotify.enable && !config.spotify.useSpicetify) pkgs.spotify;
  };
}
