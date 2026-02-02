{
  config,
  lib,
  pkgs,
  ...
}:
{
  options = {
    misc.enable = lib.mkEnableOption "enable carapace";
  };

  config = lib.mkIf config.misc.enable {
    home.shell.enableShellIntegration = true;

    home.sessionVariables = {
      EDITOR = lib.mkForce "helix";
      VISUAL = lib.mkForce "zeditor --wait";
    };

    home.shellAliases = {
      md = "mkdir";
      hx = "helix";
      cp = "cp -i";
      rm = "rm -i";
      ls = "eza -lag --group-directories-first --git --header --icons";
    };

    home.packages = with pkgs; [
      jq
      yq
      fq
      dasel
      viddy
      bat
      eza
      fastfetch
      ripgrep-all
      ripgrep
      fd
      mtr
    ];

    programs.btop = {
      enable = true;
      settings = {
        vim_keys = true;
      };
    };

    programs.carapace.enable = true;
    programs.zoxide.enable = true;

    programs.fzf = {
      enable = true;
      defaultOptions = [
        "--height 40%"
        "--layout reverse"
        "--border"
        "--multi"
        "--prompt '⠕ '"
        "--marker '○ '"
        "--pointer '-'"
      ];
      historyWidgetOptions = [
        "--bind 'ctrl-y:execute-silent(echo -n {2..} | pbcopy)+abort'"
        "--color header:italic"
        "--header 'Press CTRL-Y to copy command into clipboard'"
      ];
    };
  };
}
