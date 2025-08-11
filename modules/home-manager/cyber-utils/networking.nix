{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    nmap.enable = lib.mkEnableOption "enable nmap";
    tcpdump.enable = lib.mkEnableOption "enable tcpdump";
    vpn.enable = lib.mkEnableOption "enable vpn apps";
  };

  config = {
    home.packages =
      with pkgs;
      [
        (lib.mkIf config.nmap.enable nmap)
        (lib.mkIf config.tcpdump.enable tcpdump)
      ]
      ++ lib.optionals config.vpn.enable [
        openvpn
        openvpn3
        tailscale
      ];
  };
}
