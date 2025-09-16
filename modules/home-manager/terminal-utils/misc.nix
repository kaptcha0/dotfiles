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
