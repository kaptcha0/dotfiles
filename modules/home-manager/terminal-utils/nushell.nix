{
  lib,
  config,
  inputs,
  pkgs,
  ...
}:

{
  options = {
    nushell.enable = lib.mkEnableOption "enable nushell";
  };

  config = lib.mkIf config.nushell.enable {
    programs.nushell = {
      enable = true;
      package = pkgs.emptyDirectory;
      configFile.source = inputs.self + /configs/nushell/config.nu;
      envFile.source = inputs.self + /configs/nushell/env.nu;
      shellAliases = config.home.shellAliases;
      environmentVariables = config.home.sessionVariables;
    };
  };

}
