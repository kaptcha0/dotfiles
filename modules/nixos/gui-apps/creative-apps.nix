{
  lib,
  pkgs,
  volatilePkgs,
  config,
  ...
}:
let
  winePkg = pkgs.wineWowPackages.waylandFull;
  ardourFHSWrapper = pkgs.buildFHSEnv {
    name = "ardour-fhs-env";
    targetPkgs =
      pkgs: with pkgs; [
        xorg.libX11
        xorg.libXcursor
        xorg.libXrandr
        xorg.libXext
        xorg.libXfixes
        xorg.libXi
        xorg.libXrender
        xorg.libxcb
        libGL
        libGLU
        mesa
        vulkan-loader
        gtk3
        cairo
        pango
        gdk-pixbuf
        alsa-lib
        jack2
        libjack2
        freetype
        fontconfig
        expat
        nghttp2
        ardour
        winePkg
        samba
      ];
  };

  # Make a real executable that launches Ardour inside that env
  ardourFHS = pkgs.writeShellScriptBin "ardour-fhs" ''
    exec ${ardourFHSWrapper}/bin/ardour-fhs-env ardour8 "$@"
  '';

  # Optional desktop entry
  ardourDesktop = pkgs.makeDesktopItem {
    name = "Ardour (FHS)";
    exec = "${ardourFHS}/bin/ardour-fhs";
    icon = "ardour";
    comment = "Ardour Digital Audio Workstation inside FHS environment";
    desktopName = "Ardour (FHS)";
    genericName = "Digital Audio Workstation";
    categories = [
      "AudioVideo"
      "Audio"
      "X-AudioEditing"
      "X-Recorders"
      "X-Multitrack"
      "X-Jack"
    ];
  };
in
{
  options = {
    creative-apps = {
      music.enable = lib.mkEnableOption "enable music apps";
      photo.enable = lib.mkEnableOption "enable photo apps";
      video.enable = lib.mkEnableOption "enable video apps";
    };
  };

  config = with config.creative-apps; {
    services.pipewire = lib.mkIf music.enable {
      enable = true;
      alsa.enable = true;
      alsa.support32Bit = true;
      pulse.enable = true;
      jack.enable = true;
    };

    musnix.enable = music.enable;

    environment.systemPackages =
      with pkgs;
      lib.optionals music.enable [
        ardourFHS
        ardourDesktop
        # ardour

        reaper
        reaper-sws-extension
        reaper-reapack-extension

        jack2
        qjackctl
        qpwgraph
        volatilePkgs.carla

        (yabridge.override { wine = winePkg; })
        (yabridgectl.override { wine = winePkg; })
        winetricks
        winePkg
        samba

        vital
        decent-sampler
        lsp-plugins
        chow-tape-model
      ]
      ++ lib.optionals photo.enable [
        gimp3-with-plugins
        krita
        rapidraw
        rawtherapee
      ]
      ++ lib.optionals video.enable [
        davinci-resolve
        kdePackages.kdenlive
        blender
      ];
  };
}
