{
  lib,
  config,
  ...
}:

{
  options = {
    zed.enable = lib.mkEnableOption "enable zed";
  };

  config = lib.mkIf config.zed.enable {
    programs.zed-editor = {
      enable = true;
      userSettings = {
        helix_mode = true;
        terminal.shell.program = "nu";
      };
    };
  };
}
