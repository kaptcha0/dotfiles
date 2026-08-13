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
      enableCompletion = true;
      initContent = builtins.readFile (inputs.self + /configs/zsh/.zshrc);

    };

    programs.zsh.autosuggestion = {
      enable = true;
      strategy = [
        "history"
        "completion"
      ];
    };

    programs.zsh.syntaxHighlighting = {
      enable = true;
      highlighters = [
        "main"
        "brackets"
        "cursor"
        "root"
      ];
    };

    programs.zsh.oh-my-zsh = {
      enable = true;
      plugins = [
        "sudo"
        "command-not-found"
        "fzf"
        "zsh-interactive-cd"
      ];
    };

    programs.zsh.plugins = [
      {
        name = "zsh-fzf-tab";
        src = "${pkgs.zsh-fzf-tab}/share/fzf-tab";
      }
      {
        name = "zsh-autopair";
        src = "${pkgs.zsh-autopair}/share/zsh/zsh-autopair";
      }
      {
        name = "zsh-completions";
        src = "${pkgs.zsh-completions}/share/zsh-completions";
      }
      {
        name = "zsh-shift-select";
        src = inputs.zsh-shift-select;
        file = "zsh-shift-select.plugin.zsh";
      }
      {
        name = "zsh-ssh";
        src = inputs.zsh-ssh;
        file = "zsh-ssh.plugin.zsh";
      }
      {
        name = "zsh-helix-mode";
        src = inputs.zsh-helix-mode;
        file = "zsh-helix-mode.plugin.zsh";
      }
    ];

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
