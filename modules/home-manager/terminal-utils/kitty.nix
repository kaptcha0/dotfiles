{
  lib,
  config,
  ...
}:

{

  options = {
    kitty.enable = lib.mkEnableOption "enable kitty terminal";
  };

  config = lib.mkIf config.kitty.enable {
    programs.kitty = {
      enable = true;
      extraConfig = builtins.readFile "${config.home.homeDirectory}/.dotfiles/configs/kitty/kitty.conf";
      settings = {
        shell = "zellij";
        editor = ".";
      };
    };

    home.file = {
      # ".config/kitty" = {
      #   source = "${config.home.homeDirectory}/.dotfiles/configs/kitty";
      #   recursive = true;
      # };
    };
  };
}
