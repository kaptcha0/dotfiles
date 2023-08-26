{ pkgs }:
{
  packages = with pkgs; [
    aircrack-ng
    bettercap
    cewl
    gobuster
    hashcat
    john
    ltrace
    nmap
    sqlmap
    strace
    volatility3
  ];
}
