{ config, lib, ... }:
let
  cfg = config.wms.swayidle;
  common = import ./common.nix;
in
{
  options.wms.swayidle.enable = lib.mkEnableOption "enable swayidle service";
  config = lib.mkIf cfg.enable {
    services.swayidle = {
      enable = true;
      timeouts = [
        {
          timeout = 60;
          command = builtins.concatStringsSep " " (common.noctalia "brightness set 10");
          resumeCommand = builtins.concatStringsSep " " (common.noctalia "brightness set 50");
        }
        {
          timeout = 60 * 2;
          command = builtins.concatStringsSep " " (common.noctalia "monitors off");
          resumeCommand = builtins.concatStringsSep " " (common.noctalia "monitors on");
        }
        {
          timeout = 60 * 5;
          command = builtins.concatStringsSep " " common.locker;
        }
        {
          timeout = 60 * 10;
          command = "/usr/bin/systemctl suspend";
        }
      ];
      events = {
        before-sleep =
          (builtins.concatStringsSep " " (common.noctalia "monitors off"))
          + "; "
          + (builtins.concatStringsSep " " common.locker);
        after-resume = builtins.concatStringsSep " " (common.noctalia "monitors on");
        lock =
          builtins.concatStringsSep " " (common.noctalia "monitors off")
          + "; "
          + (builtins.concatStringsSep " " common.locker);
        unlock = builtins.concatStringsSep " " (common.noctalia "monitors on");
      };
    };
  };
}
