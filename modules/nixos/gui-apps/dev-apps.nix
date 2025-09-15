{
  lib,
  pkgs,
  config,
  ...
}:

{
  options = {
    # zed.enable = lib.mkEnableOption "enable zed editor";
    vscode.enable = lib.mkEnableOption "enable vscode editor";
    warp.enable = lib.mkEnableOption "enable warp terminal";
  };

  config = {
    environment.systemPackages = [
      # (lib.mkIf config.zed.enable pkgs.zed-editor-fhs)
      (lib.mkIf config.vscode.enable pkgs.vscode-fhs)
      (lib.mkIf config.warp.enable pkgs.warp-terminal)
    ];
  };
}
