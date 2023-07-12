{ config, pkgs, overlays, username, ... }:
let
  gitUserName = "kaptcha0";
in
{
  fonts.fontconfig.enable = true;
  targets.genericLinux.enable = true;

  imports = [
    ./packages
  ];

  nixpkgs = {
    config.allowUnfreePredicate = (pkg: true);
    config.permittedInsecurePackages = [
      "python-2.7.18.6"
    ];

    overlays = overlays;
  };

  programs = {
    # Let Home Manager install and manage itself.
    home-manager.enable = true;

    neovim = {
      enable = true;
      viAlias = true;
      vimAlias = true;
    };

    git = {
      enable = true;
      userName = gitUserName;
      extraConfig.github.user = gitUserName;
    };
  };

  home = {
    inherit username;
    homeDirectory = "/home/${username}";

    # This value determines the Manager release that your configuration is
    # compatible with. This helps avoid breakage when a new Manager release
    # introduces backwards incompatible changes.
    #
    # You should not change this value, even if you update Manager. If you do
    # want to update the value, then make sure to first check the Manager
    # release notes.
    stateVersion = "23.05"; # Please read the comment before changing.
  };

}
