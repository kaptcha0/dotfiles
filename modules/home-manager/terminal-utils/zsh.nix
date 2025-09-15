{
  lib,
  config,
  ...
}:

{
  options = {
    zsh.enable = lib.mkEnableOption "enable zsh";
  };

  config = lib.mkIf config.zsh.enable {
    programs.zsh = {
      enable = true;
      initContent = builtins.readFile "${config.home.homeDirectory}/.dotfiles/configs/zsh/.zshrc";
      envExtra = builtins.readFile "${config.home.homeDirectory}/.dotfiles/configs/zsh/.zshenv";
    };

    home.file = {
      ".xprofile" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/zsh/.profile";
      };

      ".profile" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/zsh/.profile";
      };

      ".config/zsh/" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/zsh";
        recursive = true;
      };
    };
  };
}
