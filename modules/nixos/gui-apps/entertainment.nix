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

    environment.systemPackages = lib.optional (config.spotify.enable && !config.spotify.useSpicetify) pkgs.spotify;
  };
}
