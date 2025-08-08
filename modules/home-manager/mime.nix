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
      };
    };
  };
}
