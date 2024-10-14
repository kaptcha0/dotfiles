{ pkgs }:
{
  packages = with pkgs; [
    aircrack-ng
    bettercap
    cewl
    gobuster
    hashcat
    john
    nmap
    sqlmap
    volatility3
  ];
}
