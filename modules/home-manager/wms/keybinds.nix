{ lib, ... }:
let
  mkKeybind =
    default:
    lib.mkOption {
      inherit default;
      type = lib.types.nullOr lib.types.str;
    };
in
{
  options.wms.keybinds = {
    modKey = mkKeybind "super";

    open = {
      terminal = mkKeybind "mod+enter";
      launcher = mkKeybind "mod+space";
      file-browser = mkKeybind "mod+e";
      notes = mkKeybind "mod+n";
      browser = mkKeybind "mod+b";
      editor = mkKeybind "mod+w";
      clibpoard = mkKeybind "mod+ctrl+v";
      emojis = mkKeybind "mod+period";
    };

    actions.windows.close = mkKeybind "mod+q";

    focus = {
      windows = {
        left = mkKeybind "mod+h";
        down = mkKeybind "mod+j";
        up = mkKeybind "mod+k";
        right = mkKeybind "mod+l";
      };
    };

    move = {
      windows = {
        left = mkKeybind "mod+shift+h";
        down = mkKeybind "mod+shift+j";
        up = mkKeybind "mod+shift+k";
        right = mkKeybind "mod+shift+l";
      };
    };

    system = {
      lock = mkKeybind "mod+comma";
      power-menu = mkKeybind "mod+s";
      restart-wm = mkKeybind "mod+alt+r";
    };
  };
}
