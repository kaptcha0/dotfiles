{ config, lib, pkgs, ... }:
let
  model = "qwen3.5:0.8b";
in
{
  options.agents.enable = lib.mkEnableOption "enable ai agents";
  config = lib.mkIf config.agents.enable {
    home.sessionVariables = {
      ANTHROPIC_BASE_URL = "http://localhost:11434/v1";
      ANTHROPIC_AUTH_TOKEN = "ollama"; # Required to bypass the login check
      ANTHROPIC_MODEL = model; # Or your preferred local model
    };

    services.ollama = {
      enable = true;
      port = 11434;
    };

    programs.claude-code = {
      enable = true;
    };

    home.shellAliases = {
      ccode = "${config.services.ollama.package}/bin/ollama launch claude --model ${model}";
    };

    home.packages = with pkgs; [
      open-webui
    ];
  };
}
