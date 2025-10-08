{
  lib,
  config,
  inputs,
  ...
}:

{
  options = {
    nushell.enable = lib.mkEnableOption "enable nushell";
  };

  config = lib.mkIf config.nushell.enable {
    programs.nushell = {
      enable = true;
      configFile.source = inputs.self + /configs/nushell/config.nu;
      envFile.source = inputs.self + /configs/nushell/env.nu;
      shellAliases = config.home.shellAliases;
      environmentVariables = config.home.sessionVariables;
      extraEnv = lib.mkIf config.services.ssh-agent.enable ''
        $env.SSH_AUTH_SOCK = $"($env.XDG_RUNTIME_DIR)/ssh-agent.socket"
      '';
      extraConfig = ''
        $env.NIX_PROFILES = ( ^zsh -c 'echo -n $NIX_PROFILES' )
        ${if config.services.ssh-agent.enable then ''
          if (is-terminal --stdin) {
            try { ^ssh-add -l } catch { ^ssh-add }
          }
        '' else ""}
      '';
    };
  };

}
