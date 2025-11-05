{
  lib,
  config,
  pkgs,
  inputs,
  ...
}:

{
  options = {
    starship.enable = lib.mkEnableOption "enable starship";
  };

  config = lib.mkIf config.starship.enable {
    home.packages = with pkgs; [ starship ];

    # home.file = {
    #   ".config/starship.toml" = {
    #     source = inputs.self + /configs/starship/starship.toml;
    #   };
    # };

    programs.starship = {
      enable = true;

      enableBashIntegration = true;
      enableNushellIntegration = true;
      enableZshIntegration = true;

      settings = builtins.fromTOML (builtins.readFile (inputs.self + /configs/starship/starship.toml));
    };
  };
}
