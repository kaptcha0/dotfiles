{
  lib,
  config,
  inputs,
  pkgs,
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
        shell = "zellij";
        editor = ".";
      };
    };
  };
}
