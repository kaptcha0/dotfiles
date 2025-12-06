{
  config,
  lib,
  ...
}:
{
  options.noctalia.enable = lib.mkEnableOption "enable noctalia shell";

  config = lib.mkIf config.noctalia.enable {
    programs.noctalia-shell = with config.lib.stylix.colors; {
      enable = true;
      settings = {
        floating = true;
        wallpaper.directory = "~/.dotfiles/configs/bgs";
        appLauncher.enableClipboardHistory = true;
      };

      colors = {
        mError = "#${base08}";
        mOnError = "#${base00}";
        mOnPrimary = "#${base00}";
        mOnSecondary = "#${base00}";
        mOnSurface = "#${base04}";
        mOnSurfaceVariant = "#${base04}";
        mOnTertiary = "#${base00}";
        mOutline = "#${base02}";
        mPrimary = "#${base0B}";
        mSecondary = "#${base0A}";
        mShadow = "#${base00}";
        mSurface = "#${base00}";
        mSurfaceVariant = "#${base01}";
        mTertiary = "#${base0D}";
      };
    };
  };
}
