{
  lib,
  config,
  pkgs,
  ...
}:

{

  options = {
    git.enable = lib.mkEnableOption "enable git";
  };

  config = lib.mkIf config.git.enable {
    home.packages = with pkgs; [
      git
      gitui
      gh
    ];

    programs.git = {
      enable = true;
      package = pkgs.emptyDirectory;
      lfs.enable = true;
      settings = {
        user.name = "kaptcha0";
        user.email = "50426223+kaptcha0@users.noreply.github.com";
        init.defaultBranch = "main";
      };
    };

    programs.gitui.enable = true;

    programs.gh = {
      enable = true;
      gitCredentialHelper.enable = true;
      settings.git_protocol = "ssh";
    };
  };

}
