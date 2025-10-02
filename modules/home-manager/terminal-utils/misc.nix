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
      EDITOR = "hx";
      VISUAL = "zeditor";
      FOO = "BAR";
    };

    home.shellAliases = {
      md = "mkdir";
    };

    programs.nushell = {
      shellAliases = config.home.shellAliases;
      environmentVariables = config.home.sessionVariables;
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
    programs.fzf.enable = true;
  };
}
