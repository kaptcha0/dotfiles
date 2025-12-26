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
      bash-language-server
      cmake-language-server
      docker-language-server
      hyprls
      jdt-language-server
      marksman
      nil
      nixd
      pyright
      basedpyright
      kdePackages.qtdeclarative # provides qmlls
      ruff
      taplo
      terraform-ls
      typescript-language-server
      uv
      vscode-langservers-extracted
      yaml-language-server
      zls
    ];
  };
}
