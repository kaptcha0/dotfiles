{ config, lib, ... }:
{
  options.claude-code.enable = lib.mkEnableOption "enable claude code";
  config = lib.mkIf config.claude-code.enable {
    programs.claude-code = {
      enable = true;
    };
  };
}
