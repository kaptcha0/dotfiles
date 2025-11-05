{
  lib,
  config,
  inputs,
  pkgs,
  ...
}:

{
  options = {
    zsh.enable = lib.mkEnableOption "enable zsh";
  };

  config = lib.mkIf config.zsh.enable {
    programs.zsh = {
      enable = true;
      package = pkgs.emptyDirectory;
      initContent = ''
        ${
          if config.services.ssh-agent.enable then
            ''
              if [ -z "$SSH_AUTH_SOCK" ]; then
                  eval $(ssh-agent -s)
              fi

              `ssh-add -l > /dev/null 2>&1 || ssh-add`
            ''
          else
            ""
        }
        ${builtins.readFile (inputs.self + /configs/zsh/.zshrc)}
      '';
      envExtra = builtins.readFile (inputs.self + /configs/zsh/.zshenv);
    };

    home.file = {
      ".xprofile" = {
        source = inputs.self + /configs/zsh/.profile;
      };

      ".config/zsh/" = {
        source = inputs.self + /configs/zsh;
        recursive = true;
      };
    };
  };
}
