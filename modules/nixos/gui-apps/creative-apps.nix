{
  lib,
  pkgs,
  config,
  ...
}:
let
  ardourFHSPkgs = pkgs.buildFHSEnv {
    name = "ardour-fhs";
    runScript = "ardour8"; # Command that runs inside the env
    targetPkgs =
      pkgs: with pkgs; [
        ardour
        freetype
        fontconfig
        alsa-lib
        nghttp2
      ];
  };
  ardourFHS = pkgs.makeDesktopItem {
    name = "Ardour (FHS)";
    exec = "${ardourFHSPkgs}/bin/ardour-fhs";
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

        reaper
        reaper-sws-extension
        reaper-reapack-extension

        jack2
        qjackctl
        carla

        (yabridge.override { wine = wineWowPackages.yabridge; })
        (yabridgectl.override { wine = wineWowPackages.yabridge; })
        winetricks
        wineWowPackages.yabridge

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
