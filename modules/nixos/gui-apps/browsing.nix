{
  lib,
  pkgs,
  config,
  inputs,
  ...
}:

{
  options = {
    zen.enable = lib.mkEnableOption "enable zen browser";
    brave.enable = lib.mkEnableOption "enable brave browser";
    vivaldi.enable = lib.mkEnableOption "enable vivaldi browser";
    firefox.enable = lib.mkEnableOption "enable firefox browser";
    edge.enable = lib.mkEnableOption "enable edge browser";
  };

  config = {
    programs.firefox.enable = config.firefox.enable;

    environment.systemPackages = [
      (lib.mkIf config.zen.enable (
        inputs.zen-browser.packages.${pkgs.stdenv.hostPlatform.system}.twilight.override {
          nativeMessagingHosts = [ pkgs.firefoxpwa ];
        }
      ))
      (lib.mkIf config.brave.enable pkgs.brave)
      (lib.mkIf config.vivaldi.enable pkgs.vivaldi)
      (lib.mkIf config.firefox.enable pkgs.firefox)
      (lib.mkIf config.edge.enable pkgs.microsoft-edge)
    ];
  };
}
