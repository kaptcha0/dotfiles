{
  config,
  lib,
  pkgs,
  ...
}:
{
  options = {
    ghostty.enable = lib.mkEnableOption "enable ghostty";
  };

  config = lib.mkIf config.ghostty.enable {
    programs.ghostty = {
      enable = true;
      package = pkgs.emptyDirectory;
      settings = {
        command = if config.zellij.enable then "zellij" else "";
        background-opacity = 0.75;
      };
    };
  };
}
