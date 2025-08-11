{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    wireshark.enable = lib.mkEnableOption "enable wireshark";
  };

  config = lib.mkIf config.wireshark.enable {
    programs.wireshark.enable = true;
    programs.wireshark.usbmon.enable = true;
    programs.wireshark.dumpcap.enable = true;

    boot.kernelModules = [ "usbmon" ];

    environment.systemPackages = with pkgs; [
      wireshark
      termshark
    ];
  };
}
