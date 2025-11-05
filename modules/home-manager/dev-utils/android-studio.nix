{ config, lib, ... }:
{
  options = {
    android-studio.enable = lib.mkEnableOption "enable android studio";
  };

  config = lib.mkIf config.android-studio.enable {
    home.sessionVariables = {
      ANDROID_HOME = "$HOME/Android/Sdk";
    };

    home.sessionPath = [
      "$ANDROID_HOME/emulator"
      "$ANDROID_HOME/tools"
      "$ANDROID_HOME/tools/bin"
      "$ANDROID_HOME/platform-tools"
    ];
  };
}
