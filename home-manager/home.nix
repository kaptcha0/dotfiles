{ configs, pkgs, username, overlays, ... }:
{
  programs = {
    home-manager.enable = true;
    neovim = {
      enable = true;
      package = pkgs.neovim-nightly;
      viAlias = true;
      vimAlias = true;
    };
  };

  nixpkgs = {
    inherit overlays;
    config.allowUnfreePredicate = (pkg: true);
  };

  home = {
    inherit username;
    homeDirectory = "/home/${username}/";
    stateVersion = "22.11";

    packages = with pkgs; [
      ## Utilities
      coreutils
      exa
      fd
      fzf
      htop
      lazydocker
      lazygit
      ripgrep
      starship
      viddy

      ## Security
      bettercap
      hashcat
      john
      metasploit
      radare2
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
      skaffold
      python3Full
    ];
  };
}
