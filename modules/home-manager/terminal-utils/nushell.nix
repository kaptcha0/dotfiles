{ lib, config, pkgs, ... }:

{
  options = {
    nushell.enable = lib.mkEnableOption "enable nushell";
  };

  config = lib.mkIf config.nushell.enable {
    home.packages = with pkgs; [ nushell ];

    programs.nushell = {
      enable = true;
      configFile.source = "${config.home.homeDirectory}/.dotfiles/configs/nushell/config.nu";
      envFile.source = "${config.home.homeDirectory}/.dotfiles/configs/nushell/env.nu";
    };
  };

}
