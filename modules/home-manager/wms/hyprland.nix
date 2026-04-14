{
  config,
  lib,
  ...
}:
let
  cfg = config.wms.hyprland;
  common = import ./common.nix;
in
{
  options = {
    wms.hyprland.enable = lib.mkEnableOption "enable hyprland";
  };

  config = lib.mkIf cfg.enable {
    wayland.windowManager.hyprland = {
      enable = true;
      # set the flake package
      package = null;
      portalPackage = null;
    };

    wayland.windowManager.hyprland.settings = {
      "$mod" = "SUPER";

      input.touchpad.natrual_scroll = true;
      xwayland.force_zero_scaling = true;

      general = {
        gaps_in = 8;
        gaps_out = 8;
        float_gaps = 16;
      };

      decoration = {
        rounding = 8;
        active_opacity = common.settings.active;
        inactive_opacity = common.settings.inactive;
        shadow.enabled = false;

        glow = {
          enable = true;
          range = 8;
        };
      };

      bind = [ ];

      bindm = [
        "$mod, mouse:272, movewindow"
        "$mod, mouse:273, resizewindow"
        "$mod ALT, mouse:272, resizewindow"
      ];
    };
  };
}
