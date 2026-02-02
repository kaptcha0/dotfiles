{
  lib,
  config,
  pkgs,
  inputs,
  ...
}:

{
  options = {
    helix.enable = lib.mkEnableOption "enable helix editor";
  };

  config = lib.mkIf config.helix.enable {
    programs.helix = {
      enable = true;
      # defaultEditor = true;
      package = pkgs.emptyDirectory;
      settings = builtins.fromTOML (
        builtins.readFile (inputs.self + /configs/helix/config.toml)
      );
      languages = builtins.fromTOML (
        builtins.readFile (inputs.self + /configs/helix/languages.toml)
      );
    };

    home.file.".config/helix/ignore" = {
      source = inputs.self + /configs/helix/ignore;
    };
  };

}
