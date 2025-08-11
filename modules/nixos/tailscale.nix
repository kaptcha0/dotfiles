{ lib, config, ... }:

{
  options = {
    tailscale.enable = lib.mkEnableOption "enable tailscale";
  };

  config = lib.mkIf config.tailscale.enable {
    services.tailscale = {
      enable = true;
      extraSetFlags = [
        "--accept-dns"
        "--accept-routes"
        "--auto-update"
        "--exit-node-allow-lan-access"
      ];
    };
  };
}
