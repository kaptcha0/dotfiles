{ config, lib, pkgs, ... }:

{
  options = {
    zellij.enable = lib.mkEnableOption "zellij";
  };

  config = lib.mkIf config.zellij.enable {
    programs.zellij = {
      enable = true;
      package = pkgs.stdenv.mkDerivation {
          name = "zellij-fake";
          version = "9999";  # A version greater than 0.32.0
          buildCommand = ''
            mkdir -p $out
          '';
        };
      settings = {
        show_startup_tips = false;
        default_layout = "compact";
      };
    };
  };
}
