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
      envExtra = builtins.readFile (inputs.self + /configs/zsh/.zshenv);
      initContent = ''
        ${builtins.readFile (inputs.self + /configs/zsh/.zshrc)}
        source ${pkgs.zsh-fzf-tab}/share/fzf-tab/fzf-tab.plugin.zsh
        zstyle ':fzf-tab:*' use-fzf-default-opts yes
      '';

      autosuggestion = {
        enable = true;
        strategy = [
          "history"
          "completion"
        ];
      };

      syntaxHighlighting = {
        enable = true;
        highlighters = [
          "main"
          "brackets"
          "cursor"
          "root"
        ];
      };

      oh-my-zsh = {
        enable = true;
        plugins = [
          "sudo"
          "command-not-found"
          "fzf"
          "zsh-interactive-cd"
        ];
      };

      plugins = [
        {
          name = "zsh-fzf-tab";
          src = "${pkgs.zsh-fzf-tab}/share/fzf-tab";
        }
      ];
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
