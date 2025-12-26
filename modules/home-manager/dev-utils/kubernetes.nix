{
  config,
  lib,
  pkgs,
  ...
}:
{
  options.kubernetes.enable = lib.mkEnableOption "enable kubernetes";
  config = lib.mkIf config.kubernetes.enable {
    programs.k9s.enable = true;

    home.packages = with pkgs; [
      kubectl
      kubetail
      kubernetes-helm
    ];

    home.shellAliases = {
      k = "kubectl";
      kk = "kubectl kustomize";
    };
  };
}
