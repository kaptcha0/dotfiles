{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    direnv.enable = lib.mkEnableOption "enable direnv";
    devenv.enable = lib.mkEnableOption "enable devenv";
    fh.enable = lib.mkEnableOption "enable flakehub cli";
  };

  config = {
    programs.direnv = lib.mkIf config.direnv.enable {
      enable = true;
      nix-direnv.enable = true;
      config = {
        global = {
          load_dotenv = true;
        };
      };
    };

    home.packages = with pkgs; [
      (lib.mkIf config.devenv.enable devenv)
      (lib.mkIf config.fh.enable fh)
    ];
  };
}
