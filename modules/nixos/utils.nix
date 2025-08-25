{
  config,
  lib,
  pkgs,
  options,
  ...
}:

{

  options = {
    utils.enable = lib.mkEnableOption "enable utilities";
    nix-ld.enable = lib.mkEnableOption "enable nix-ld (ONLY FOR NIXOS SYSTEMS)";
  };

  config = {
    programs.nix-ld.enable = config.nix-ld.enable;
    programs.nix-ld.libraries = options.programs.nix-ld.libraries.default ++ (with pkgs; [ freetype ]);

    environment.systemPackages =
      with pkgs;
      lib.optionals config.utils.enable [
        vim
        wget
        pciutils
        net-tools
        usbutils
        binutils
        file

        kitty

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
