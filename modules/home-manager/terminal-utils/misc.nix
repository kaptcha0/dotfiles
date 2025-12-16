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
      EDITOR = lib.mkForce "hx";
      VISUAL = lib.mkForce "zeditor --wait";
    };

    home.shellAliases = {
      md = "mkdir";
    };

    home.packages = with pkgs; [
      viddy
      bat
      eza
      fastfetch
      ripgrep-all
      fd
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
      historyWidgetOptions = [
        "--bind 'ctrl-y:execute-silent(echo -n {2..} | pbcopy)+abort'"
        "--color header:italic"
        "--header 'Press CTRL-Y to copy command into clipboard'"
      ];
    };
  };
}
