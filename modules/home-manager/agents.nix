{
  config,
  lib,
  pkgs,
  ...
}:
let
  models = ["qwen3.5:9b" "gemma4:e2b"];
  model = builtins.elemAt models 0;
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

    programs.opencode = {
      enable = true;
      settings = {
        permission = {
          "*" = "allow";
          "edit" = "ask";
          "bash" = "ask";
          "task" = "ask";
          "skill" = "ask";
          "webfetch" = "ask";
          "external_directory" = "ask";
        };
      };
    };

    home.shellAliases = {
      ccode = "${config.services.ollama.package}/bin/ollama launch claude --model ${model}";
      ocode = "EDITOR=\"${config.home.sessionVariables.EDITOR}\" ollama launch opencode --model ${model}";
    };

    home.packages = with pkgs; [
      (lib.mkIf stdenv.hostPlatform.isLinux open-webui)
    ];
  };
}
