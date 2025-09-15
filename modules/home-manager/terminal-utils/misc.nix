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

    home.packages = with pkgs; [
      viddy
      bat
      eza
      fastfetch
      ripgrep-all
    ];

    programs.carapace.enable = true;
    programs.zoxide.enable = true;
    programs.fzf.enable = true;
  };
}
