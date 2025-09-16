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
      initContent = ''
        ${
          if config.services.ssh-agent.enable then
            ''
              if [ -z "$SSH_AUTH_SOCK" ]; then
                  eval $(ssh-agent -s)
              fi

              `ssh-add -l > /dev/null 2>&1 || ssh-add ~/.ssh/id_ed25519`
            ''
          else
            ""
        }
        ${builtins.readFile "${config.home.homeDirectory}/.dotfiles/configs/zsh/.zshrc"}
      '';
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
