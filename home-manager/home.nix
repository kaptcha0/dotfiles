{ config, pkgs, ... }:
let
  nixosUnstable = import <nixos-unstable> { };
in
{
  nixpkgs = {
    config.allowUnfreePredicate = (pkg: true);
    overlays = [
      (import (builtins.fetchTarball {
        url = https://github.com/nix-community/neovim-nightly-overlay/archive/master.tar.gz;
      }))
    ];
  };

  fonts.fontconfig.enable = true;

  home = {
    username = "kaptcha";
    homeDirectory = "/home/kaptcha";

    # This value determines the Manager release that your configuration is
    # compatible with. This helps avoid breakage when a new Manager release
    # introduces backwards incompatible changes.
    #
    # You should not change this value, even if you update Manager. If you do
    # want to update the value, then make sure to first check the Manager
    # release notes.
    stateVersion = "23.05"; # Please read the comment before changing.

    # The packages option allows you to install Nix packages into your
    # environment.
    packages = with pkgs; [
      ## Utilities
      ansible
      bat
      binutils
      coreutils-full
      exa
      fd
      fzf
      gcc
      gdb
      gdbgui
      git
      gh
      htop
      lazydocker
      lazygit
      ltrace
      gnumake
      ripgrep
      sqlmap
      starship
      strace
      tmux
      tree
      viddy

      nixpkgs-fmt
      rnix-lsp
      nerdfonts

      ## Security
      bettercap
      cewl
      gobuster
      hashcat
      john
      nixosUnstable.radare2
      volatility3

      ## Development
      ansible-language-server
      ansible-lint
      cmake
      kube3d
      kubectl
      kubernetes-helm
      kustomize
      skaffold
      virtualenv
    ];
  };

  # Let Home Manager install and manage itself.
  programs = {
    home-manager.enable = true;
    neovim = {
      enable = true;
      viAlias = true;
      vimAlias = true;
    };
  };
}
