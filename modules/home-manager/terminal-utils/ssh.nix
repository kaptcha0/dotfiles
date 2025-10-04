{
  config,
  lib,
  ...
}:

{
  options = {
    ssh.enable = lib.mkEnableOption "enable ssh configuration";
  };

  config = lib.mkIf config.ssh.enable {
    services.ssh-agent.enable = true;
    services.ssh-agent.socket = "ssh-agent.socket";

    # Optionally, you can also tell your ssh client to automatically
    # add new keys to the agent for you when they are used.
    programs.ssh = {
      enable = true;
      extraConfig = ''
        AddKeysToAgent yes
      '';
    };
  };
}
