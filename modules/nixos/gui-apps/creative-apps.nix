{
  lib,
  pkgs,
  config,
  ...
}:

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

    environment.sessionVariables = {
      PATH = [
        "$PATH"
      ]
      ++ (lib.optional music.enable "/run/current-system/sw/lib/");
    };

    environment.systemPackages =
      with pkgs;
      [ ]
      ++ lib.optionals music.enable [
        ardour

        reaper
        reaper-sws-extension
        reaper-reapack-extension

        jack2
        qjackctl
        carla

        (yabridge.override { wine = wineWowPackages.stagingFull; })
        (yabridgectl.override { wine = wineWowPackages.stagingFull; })
        winetricks
        wineWowPackages.stagingFull

        vital
        decent-sampler
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
