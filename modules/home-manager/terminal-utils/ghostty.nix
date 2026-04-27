{
  config,
  lib,
  pkgs,
  ...
}:
let
  customShader = builtins.fetchurl {
    url = "https://raw.githubusercontent.com/sahaj-b/ghostty-cursor-shaders/06d4e90fb5410e9c4d0b3131584060adddf89406/cursor_tail.glsl";
    sha256 = "04m35iyvr7vk6j2m5mywrb6i3pw2qmbghp1gyab2fldx264j6h88";
  };
in
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
        custom-shader = customShader;
      };
    };
  };
}
