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

    apktool.enable = true;
    sherlock.enable = true;
    harvester.enable = true;
    cewler.enable = true;
    cook-framework.enable = true;
    wpscan.enable = true;
    dex2jar.enable = true;

    recon-ng.enable = true;
    setoolkit.enable = true;

    radare.enable = true;
    binwalk.enable = true;

    metasploit.enable = true;
    jtr.enable = true;
    hashcat.enable = true;
    aircrack.enable = true;
    bettercap.enable = true;
    wordlists.enable = true;
    wordlists.seclists.enable = true;
  };
}
