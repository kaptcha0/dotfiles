{
  lib,
  config,
  pkgs,
  inputs,
  ...
}:

{

  options = {
    kitty.enable = lib.mkEnableOption "enable kitty terminal";
  };

  config = lib.mkIf config.kitty.enable {
    programs.kitty = {
      enable = true;
      package = pkgs.emptyDirectory;
      extraConfig = builtins.readFile (inputs.self + /configs/kitty/kitty.conf);
      settings = {
        shell = if config.zellij.enable then "${pkgs.zellij}/bin/zellij" else "";
        editor = ".";
      };
    };
  };
}
