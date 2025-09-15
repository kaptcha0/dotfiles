{ lib, config, ... }:

{
  imports = [
    ./networking.nix
    ./analysis.nix
    ./exploitation.nix
  ];

  options = {
    cyber-utils-bundle.enable = lib.mkEnableOption "enable cybersecurity utilities";
  };

  config = lib.mkIf config.cyber-utils-bundle.enable {
    nmap.enable = true;
    tcpdump.enable = true;
    vpn.enable = true;

    sherlock.enable = true;
    harvester.enable = true;
    cewler.enable = true;
    ronin.enable = true;
    
    recon-ng.enable = true;
    setoolkit.enable = true;

    caido.enable = true;
    wireshark.enable = true;
    radare.enable = true;
    binwalk.enable = true;

    metasploit.enable = true;
    jtr.enable = true;
    hashcat.enable = true;
    aircrack.enable = true;
    bettercap.enable = true;
  };
}
