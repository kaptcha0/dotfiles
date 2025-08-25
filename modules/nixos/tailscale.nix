{ lib, config, ... }:

{
  options = {
    tailscale.enable = lib.mkEnableOption "enable tailscale";
  };

  config = lib.mkIf config.tailscale.enable {
    networking.firewall.checkReversePath = lib.mkForce true;

    services.tailscale = {
      enable = true;
      useRoutingFeatures = "client";
      extraSetFlags = [
        "--accept-dns"
        "--accept-routes"
        "--exit-node=pve"
        "--exit-node-allow-lan-access=true"
      ];
    };
  };
}
