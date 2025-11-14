{
  pkgs,
  ...
}:
{
  config.environment.systemPackages = with pkgs; [
    wineWow64Packages.yabridge
    winetricks
    yabridgectl
  ];
}
