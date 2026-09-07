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
    nmap.enable = lib.mkDefault true;
    tcpdump.enable = lib.mkDefault true;
    vpn.enable = lib.mkDefault true;

    apktool.enable = lib.mkDefault true;
    sherlock.enable = lib.mkDefault true;
    harvester.enable = lib.mkDefault true;
    cewler.enable = lib.mkDefault true;
    cook-framework.enable = lib.mkDefault true;
    wpscan.enable = lib.mkDefault true;
    dex2jar.enable = lib.mkDefault true;

    recon-ng.enable = lib.mkDefault true;
    setoolkit.enable = lib.mkDefault true;

    radare.enable = lib.mkDefault true;
    binwalk.enable = lib.mkDefault true;

    metasploit.enable = lib.mkDefault true;
    jtr.enable = lib.mkDefault true;
    hashcat.enable = lib.mkDefault true;
    aircrack.enable = lib.mkDefault true;
    bettercap.enable = lib.mkDefault true;
    wordlists.enable = lib.mkDefault true;
    wordlists.seclists.enable = lib.mkDefault true;
  };
}
