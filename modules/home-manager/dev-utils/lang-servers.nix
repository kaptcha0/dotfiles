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
      asm-lsp
      ansible-language-server
      bash-language-server
      cmake-language-server
      dockerfile-language-server-nodejs
      hyprls
      marksman
      nil
      nixd
      pyright
      kdePackages.qtdeclarative # provides qmlls
      taplo
      terraform-ls
      typescript-language-server
      vscode-langservers-extracted
      yaml-language-server
      zls
    ];
  };
}
