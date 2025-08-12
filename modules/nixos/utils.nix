{
  config,
  lib,
  pkgs,
  ...
}:

{

  options = {
    utils.enable = lib.mkEnableOption "enable utilities";
    nix-ld.enable = lib.mkEnableOption "enable nix-ld (ONLY FOR NIXOS SYSTEMS)";
  };

  config = {
    programs.nix-ld.enable = config.nix-ld.enable;

    environment.systemPackages =
      with pkgs;
      lib.optionals config.utils.enable [
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
