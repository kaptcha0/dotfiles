{ lib, config, ... }:

{
  imports = [
    ./zed.nix
    ./lang-servers.nix
  ];

  options = {
    dev-utils-bundle.enable = lib.mkEnableOption "enable dev utils";
  };

  config = lib.mkIf config.dev-utils-bundle.enable {
    lang-servers.enable = true;
  };
}
