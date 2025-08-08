{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    lang-servers.enable = lib.mkEnableOption "enable language servers";
  };

  config = lib.mkIf config.lang-servers.enable {
    home.packages = with pkgs; [
      bash-language-server
      cmake-language-server
      dockerfile-language-server-nodejs
      marksman
      nil
      nixd
      pyright
      taplo
      typescript-language-server
      vscode-langservers-extracted
    ];
  };
}
