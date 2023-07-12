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
    radare2
    nmap
    sqlmap
    strace
    volatility3
  ];
}
