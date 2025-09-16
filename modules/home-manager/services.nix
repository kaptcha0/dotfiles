{
  lib,
  config,
  ...
}:
{
  options = {
    user-services = {
      ssh-agent.enable = lib.mkEnableOption "enable ssh-agent";
    };
  };

  config = {
    services.ssh-agent.enable = config.user-services.ssh-agent.enable;
  };
}
