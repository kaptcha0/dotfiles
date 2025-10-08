{ lib, config, pkgs, inputs, ... }:

{
  options = {
    jujutsu.enable = lib.mkEnableOption "enable jujutsu";
  };

  config = lib.mkIf config.jujutsu.enable {
    home.packages = with pkgs; [ jujutsu ];

    programs.jujutsu.enable = true;

    home.file.".config/jj" = {
      source = inputs.self + /configs/jj;
      recursive = true;
    };
  };

}
