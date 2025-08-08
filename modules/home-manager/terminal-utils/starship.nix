{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    starship.enable = lib.mkEnableOption "enable starship";
  };

  config = lib.mkIf config.starship.enable {
    home.packages = with pkgs; [ starship ];

    home.file = {
      ".config/starship.toml" = {
        source = "${config.home.homeDirectory}/.dotfiles/configs/starship/starship.toml";
      };
    };

    programs.starship = {
      enable = true;

      enableBashIntegration = true;
      enableNushellIntegration = true;
      enableZshIntegration = true;
    };
  };

}
