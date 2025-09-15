{ config, lib, ... }:

{
  options = {
    zellij.enable = lib.mkEnableOption "zellij";
  };

  config = lib.mkIf config.zellij.enable {
    programs.zellij = {
      enable = true;
      attachExistingSession = true;
      settings = {
        default_shell = "nu";
        show_startup_tips = false;
      };
    };
  };
}
