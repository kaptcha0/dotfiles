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
    programs.nix-ld.libraries =
      options.programs.nix-ld.libraries.default
      ++ (with pkgs; [
        freetype
        xorg.libX11
        xorg.libXext
        xorg.libXrender
        xorg.libXtst
        xorg.libXi
        libGL
        mesa_glu
        fontconfig
        freetype
        alsa-lib

        gtk3
        glib
        cairo
        pango
        gdk-pixbuf
        webkitgtk_4_1
      ]);

    environment.systemPackages =
      with pkgs;
      lib.optionals config.utils.enable [
        vim
        wget
        pciutils
        net-tools
        traceroute
        usbutils
        binutils
        file

        bluetui

        nautilus
        nautilus-open-any-terminal
        showtime
        papers
        baobab
        gnomecast
        gnome-logs
        gnome-maps
        gnome-frog
        gnome-usage
        gnome-tecla
        gnome-music
        gnome-tweaks
        gnome-photos
        gnome-weather
        gnome-system-monitor
        gnome-network-displays
        
        kdePackages.isoimagewriter
        kdePackages.partitionmanager
        hardinfo2
        haruna

        wayland-utils
        wl-clipboard
      ];
  };

}
