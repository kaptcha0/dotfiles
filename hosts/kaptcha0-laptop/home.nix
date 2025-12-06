{ pkgs, nixgl, ... }:

{
  # Home Manager needs a bit of information about you and the paths it should
  # manage.
  home.username = "kaptcha0";
  home.homeDirectory = "/home/kaptcha0";

  terminal-utils-bundle.enable = true;
  dev-utils-bundle.enable = true;
  cyber-utils-bundle.enable = true;

  niri.enable = true;
  sherlock-launcher.enable = true;
  theming.enable = true;

  # This value determines the Home Manager release that your configuration is
  # compatible with. This helps avoid breakage when a new Home Manager release
  # introduces backwards incompatible changes.
  #
  # You should not change this value, even if you update Home Manager. If you do
  # want to update the value, then make sure to first check the Home Manager
  # release notes.
  home.stateVersion = "25.11"; # Please read the comment before changing.

  targets.genericLinux = {
    nixGL.packages = nixgl.packages;
    nixGL.defaultWrapper = "mesa";
    nixGL.installScripts = [ "mesa" ];
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
  home.sessionVariables = {
    WINEESYNC = 1;
    WINEFSYNC = 1;
  };
}
