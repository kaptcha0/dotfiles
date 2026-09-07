{config, pkgs, ...}:
let stylix = config.home-manager.users.${config.system.primaryUser}.stylix;
in
{
  system.primaryUser = "kaptcha";

  system.defaults = {

    dock = {
      autohide = true;
      show-recents = false;
      tilesize = 32;

      persistent-apps = [
        "/Applications/Orion.app"
        "${pkgs.zed-editor}/Applications/Zed.app"
        "${pkgs.ghostty-bin}/Applications/Ghostty.app"
        "/System/Applications/Mail.app"
        "/Applications/Logic Pro Creator Studio.app"
        "/Applications/Spotify.app"
        {
          spacer.small = true;
        }
      ];
    };

    finder = {
      AppleShowAllFiles = true;
      FXPreferredViewStyle = "clmv";
      FXRemoveOldTrashItems = true;
      ShowPathbar = true;
      ShowStatusBar = true;
    };

    loginwindow = {
      GuestEnabled = false;
    };

    NSGlobalDomain = {
      AppleICUForce24HourTime = true;
      AppleInterfaceStyle = "Dark";
      AppleShowAllFiles = true;
      InitialKeyRepeat = 2;
      KeyRepeat = 2;
    };
  };

  system.activationScripts.postActivation.text = ''
    if [ -x /usr/local/bin/desktoppr ]; then
      /usr/local/bin/desktoppr "$(readlink -f ${stylix.image})"
    fi
  '';
}
