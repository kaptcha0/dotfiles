{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    obsidian.enable = lib.mkEnableOption "enable obsidian";
    office.enable = lib.mkEnableOption "enable office";
    zoom.enable = lib.mkEnableOption "enable zoom";
    teams.enable = lib.mkEnableOption "enable teams";
    discord.enable = lib.mkEnableOption "enable discord";
  };

  config = {
    environment.systemPackages = with pkgs; [
      (lib.mkIf config.obsidian.enable obsidian)
      (lib.mkIf config.office.enable libreoffice-qt6)
      (lib.mkIf config.zoom.enable zoom-us)
      (lib.mkIf config.teams.enable teams-for-linux)
    ];
  };
}
