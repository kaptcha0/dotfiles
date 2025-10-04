{
  lib,
  config,
  ...
}:

{
  options = {
    nushell.enable = lib.mkEnableOption "enable nushell";
  };

  config = lib.mkIf config.nushell.enable {
    programs.nushell = {
      enable = true;
      configFile.source = "${config.home.homeDirectory}/.dotfiles/configs/nushell/config.nu";
      envFile.source = "${config.home.homeDirectory}/.dotfiles/configs/nushell/env.nu";
      extraEnv = lib.mkIf config.services.ssh-agent.enable ''
        $env.SSH_AUTH_SOCK = $"($env.XDG_RUNTIME_DIR)/ssh-agent.socket"
      '';
      extraConfig = lib.mkIf config.services.ssh-agent.enable ''
        try { ssh-add -l | ignore } catch { ssh-add }
      '';
    };
  };

}
