{ config, lib, pkgs, ... }:
{
  options = {
    greeter.enable = lib.mkEnableOption "enables greeter";
  };

  config = lib.mkIf config.greeter.enable {
    services.displayManager.ly.enable = true;
  };
}
