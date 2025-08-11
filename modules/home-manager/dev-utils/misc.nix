{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    direnv.enable = lib.mkEnableOption "enable direnv";
  };

  config = {
    home.packages = with pkgs; [
      (lib.mkIf config.direnv.enable direnv)
    ];
  };
}
