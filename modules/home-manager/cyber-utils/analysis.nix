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
  };

  config = {
    home.packages =
      with pkgs;
      [
        (lib.mkIf config.binwalk.enable binwalk)
      ]
      ++ lib.optionals config.radare.enable [
        radare2
        iaito
      ];
  };
}
