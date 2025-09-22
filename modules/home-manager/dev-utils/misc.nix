{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    direnv.enable = lib.mkEnableOption "enable direnv";
    kubectl.enable = lib.mkEnableOption "enable kubectl";
  };

  config = {
    programs.direnv = lib.mkIf config.direnv.enable {
      enable = true;
      nix-direnv.enable = true;
    };

    home.packages = with pkgs; [
      (lib.mkIf config.kubectl.enable kubectl)
    ];
  };
}
