{ lib, pkgs, config, inputs, ... }:

{
  options = {
    zen.enable = lib.mkEnableOption "enable zen browser";
    brave.enable = lib.mkEnableOption "enable brave browser";
    vivaldi.enable = lib.mkEnableOption "enable vivaldi browser";
    firefox.enable = lib.mkEnableOption "enable firefox browser";
  };

  config = {
    programs.firefox.enable = config.firefox.enable;

    environment.systemPackages = [
      (lib.mkIf config.zen.enable (inputs.zen-browser.packages."x86_64-linux".twilight.override {
        nativeMessagingHosts = [ pkgs.firefoxpwa ];
      }))
      (lib.mkIf config.brave.enable pkgs.brave)
      (lib.mkIf config.vivaldi.enable pkgs.vivaldi)
      (lib.mkIf config.firefox.enable pkgs.firefox)
    ];
  };
}
