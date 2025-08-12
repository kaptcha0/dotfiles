{ config, lib, ... }:

{
  options = {
    mime = {
      enable = lib.mkEnableOption "mime";
    };
  };

  config = lib.mkIf config.mime.enable {
    xdg.mimeApps = {
      enable = true;
      defaultApplications = {
        "x-scheme-handler/native-access" = [ "Native Access.desktop" ];
        "x-scheme-handler/http" = "zen-beta.desktop";
        "x-scheme-handler/https" = "zen-beta.desktop";
        "x-scheme-handler/about" = "zen-beta.desktop";
        "x-scheme-handler/unknown" = "zen-beta.desktop";
      };
    };
  };
}
