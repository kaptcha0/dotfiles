{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    wireshark.enable = lib.mkEnableOption "enable wireshark";
    radare.enable = lib.mkEnableOption "enable radare2";
    binwalk.enable = lib.mkEnableOption "enable binwalk";
    caido.enable = lib.mkEnableOption "enable caido";
    recon-ng.enable = lib.mkEnableOption "enable recon-ng";
    setoolkit.enable = lib.mkEnableOption "enable social engineer toolkit";
  };

  config = {
    home.packages =
      with pkgs;
      [
        (lib.mkIf config.binwalk.enable binwalk)
        (lib.mkIf config.caido.enable caido)
        (lib.mkIf config.recon-ng.enable recon-ng)
        (lib.mkIf config.setoolkit.enable social-engineer-toolkit)
      ]
      ++ lib.optionals config.radare.enable [
        radare2
        iaito
      ];
  };
}
