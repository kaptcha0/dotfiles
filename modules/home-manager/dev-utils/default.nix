{ lib, config, ... }:

{
  imports = [
    ./zed.nix
    ./lang-servers.nix
    ./misc.nix
  ];

  options = {
    dev-utils-bundle.enable = lib.mkEnableOption "enable dev utils";
  };

  config = lib.mkIf config.dev-utils-bundle.enable {
    lang-servers.enable = true;

    direnv.enable = true;
    zed.enable = true;
  };
}
