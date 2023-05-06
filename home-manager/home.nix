{ configs, pkgs, username, overlays, ... }:
let 
  nixpkgsUnstable = import <nixpkgs-unstable> {};
in
{
  nixpkgs = {
    config.allowUnfreePredicate = (pkg: true);
    overlays = overlays;
  };


  programs = {
    home-manager.enable = true;

    neovim = {
      enable = true;
      viAlias = true;
      vimAlias = true;
    };
  };

  home = {
    inherit username;
    homeDirectory = "/home/${username}/";
    stateVersion = "22.11";

    packages = with pkgs; [
      ## Utilities
      binutils
      coreutils-full
      exa
      fd
      fzf
      gdb
      gdbgui
      git
      gh
      htop
      lazydocker
      lazygit
      ripgrep
      starship
      viddy
      nixpkgsUnstable.wl-clipboard

      ## Security
      bettercap
      hashcat
      john
      nixpkgsUnstable.radare2
      volatility3

      ## Development
      cmake
      go
      kube3d
      kubectl
      kubernetes-helm
      kustomize
      nodejs
      nodePackages_latest.pnpm
      nodePackages_latest.yarn
      python3Full
      skaffold
      virtualenv
    ];
  };
}
