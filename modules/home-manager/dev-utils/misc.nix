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
    home.packages = with pkgs; [
      (lib.mkIf config.direnv.enable direnv)
      (lib.mkIf config.kubectl.enable kubectl)
    ];
  };
}
