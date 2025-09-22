{
  lib,
  config,
  pkgs,
  ...
}:

{
  options = {
    nushell.enable = lib.mkEnableOption "enable nushell";
  };

  config = lib.mkIf config.nushell.enable {
    home.packages = with pkgs; [ nushell ];

    programs.nushell = {
      enable = true;
      configFile.source = "${config.home.homeDirectory}/.dotfiles/configs/nushell/config.nu";
      envFile.source = "${config.home.homeDirectory}/.dotfiles/configs/nushell/env.nu";
      extraConfig = lib.mkIf config.services.ssh-agent.enable ''
        do --env {
          let username = if ($env.USER? != null) { $env.USER } else { $env.USERNAME }
          let ssh_agent_file = (
            $nu.temp-path | path join $"ssh-agent-($username).nuon"
          )

          if ($ssh_agent_file | path exists) {
            let ssh_agent_env = open ($ssh_agent_file)
            if ($"/proc/($ssh_agent_env.SSH_AGENT_PID)" | path exists) {
                load-env $ssh_agent_env
                return
            } else {
                rm $ssh_agent_file
            }
          }

          let ssh_agent_env = ^ssh-agent -c
              | lines
              | first 2
              | parse "setenv {name} {value};"
              | transpose --header-row
              | into record
          load-env $ssh_agent_env
          $ssh_agent_env | save --force $ssh_agent_file
        }

        try { ssh-add -l | ignore } catch { ssh-add ~/.ssh/id_ed25519 }
      '';
    };
  };

}
