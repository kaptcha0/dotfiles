{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    zsh.enable = lib.mkEnableOption "enable zsh";
  };

  config = lib.mkIf config.zsh.enable {
    home.packages = with pkgs; [
      viddy
      fzf
      eza
      neofetch
      ripgrep-all
    ];

    home.file = {
      ".zshrc" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/zsh/.zshrc";
      };

      ".zshenv" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/zsh/.zshenv";
      };

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
