{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    radare.enable = lib.mkEnableOption "enable radare2";
    binwalk.enable = lib.mkEnableOption "enable binwalk";
    caido.enable = lib.mkEnableOption "enable caido";
    recon-ng.enable = lib.mkEnableOption "enable recon-ng";
    setoolkit.enable = lib.mkEnableOption "enable social engineer toolkit";
    sherlock.enable = lib.mkEnableOption "enable sherlock";
    harvester.enable = lib.mkEnableOption "enable theHarvester";
    cewler.enable = lib.mkEnableOption "enable cewler";
    cook-framework.enable = lib.mkEnableOption "enable cook framework";
    ronin.enable = lib.mkEnableOption "enable ronin";
  };

  config = {
    home.packages =
      with pkgs;
      [
        (lib.mkIf config.binwalk.enable binwalk)
        (lib.mkIf config.caido.enable (config.lib.nixGL.wrap caido))
        (lib.mkIf config.recon-ng.enable recon-ng)
        (lib.mkIf config.setoolkit.enable social-engineer-toolkit)
        (lib.mkIf config.sherlock.enable sherlock)
        (lib.mkIf config.harvester.enable theharvester)
        (lib.mkIf config.cewler.enable cewler)
        (lib.mkIf config.cook-framework.enable cook-framework)
        (lib.mkIf config.ronin.enable (config.lib.nixGL.wrap ronin))
      ]
      ++ lib.optionals config.radare.enable [
        radare2
        (config.lib.nixGL.wrap iaito)
      ];
  };
}
