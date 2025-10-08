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
        features = {
          edit_prediction_provider = "copilot";
        };
        helix_mode = true;
        terminal.shell.program = "zsh";
        terminal.font_family = config.stylix.fonts.monospace.name;
      };
    };
  };
}
