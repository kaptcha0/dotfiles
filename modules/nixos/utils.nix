{ lib, pkgs, ... }:

{

  options = {
    utils.enable = lib.mkEnableOption "enable utilities";
  };

  config = {
    environment.systemPackages = with pkgs; [
      vim
      wget
      pciutils
      net-tools
      usbutils
      binutils

      kdePackages.discover
      kdePackages.kcalc
      kdePackages.kcharselect
      kdePackages.kcolorchooser
      kdePackages.kolourpaint
      kdePackages.ksystemlog
      kdePackages.sddm-kcm
      kdiff3
      kdePackages.isoimagewriter
      kdePackages.partitionmanager
      hardinfo2
      haruna
      wayland-utils
      wl-clipboard
    ];
  };

}
