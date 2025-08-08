{ lib, config, pkgs, ... }:

{
  options = {
    mise.enable = lib.mkEnableOption "enable mise";
  };

  config = lib.mkIf config.mise.enable {
    home.packages = with pkgs; [ mise ];

    programs.mise = {
      enable = true;

      enableZshIntegration = true;
      enableNushellIntegration = true;
      enableBashIntegration = true;
    };

    home.file.".config/mise/config.toml" = {
      source = "${config.home.homeDirectory}/.dotfiles/configs/mise/mise.toml";
    };
  };

}
