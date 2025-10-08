{ lib, config, pkgs, inputs, ... }:

{
  options = {
    helix.enable = lib.mkEnableOption "enable helix editor";
  };

  config = lib.mkIf config.helix.enable {
    programs.helix = {
      enable = true;
      defaultEditor = true;
      package = pkgs.emptyDirectory;
      extraConfig = builtins.readFile (inputs.self + /configs/helix/config.toml);
    };

    home.file.".config/helix/ignore" = {
      source = inputs.self + /configs/helix/ignore;
    };
  };

}
