{ lib, config, ... }:

{
  imports = [
    ./zed.nix
    ./lang-servers.nix
    ./android-studio.nix
    ./misc.nix
  ];

  options = {
    dev-utils-bundle.enable = lib.mkEnableOption "enable dev utils";
  };

  config = lib.mkIf config.dev-utils-bundle.enable {
    lang-servers.enable = true;

    android-studio.enable = true;
    direnv.enable = true;
    devenv.enable = true;
    fh.enable = true;
    kubectl.enable = true;

    zed.enable = true;
  };
}
