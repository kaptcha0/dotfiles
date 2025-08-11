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
  };

  config = {
    environment.systemPackages = with pkgs; [
      (lib.mkIf config.obsidian.enable obsidian)
      (lib.mkIf config.office.enable libreoffice-qt6)
    ];
  };
}
