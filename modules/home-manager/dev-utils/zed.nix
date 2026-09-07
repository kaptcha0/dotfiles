{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    zed.enable = lib.mkEnableOption "enable zed";
  };

  config = lib.mkIf config.zed.enable {
    programs.zed-editor = {
      enable = true;
      package = pkgs.emptyDirectory;
      userSettings = {
        edit_predictions.provider = "ollama";
        helix_mode = true;
        terminal.shell.program = "zsh";
        terminal.font_family = config.stylix.fonts.monospace.name;
      };
    };
  };
}
