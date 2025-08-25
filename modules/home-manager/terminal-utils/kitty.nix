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
    programs.kitty.enable = true;
    home.file = {
      ".config/kitty" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/kitty";
        recursive = true;
      };
    };
  };
}
