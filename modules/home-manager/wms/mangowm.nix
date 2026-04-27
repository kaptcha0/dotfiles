{
  config,
  lib,
  pkgs,
  ...
}:
let
  cfg = config.wms.mangowm;
  common = import ./common.nix;
  colors = config.lib.stylix.colors;
in
{
  options = {
    wms.mangowm.enable = lib.mkEnableOption "enable mangowm";
  };

  config = lib.mkIf cfg.enable {
    home.packages = with pkgs; [
      sway-contrib.grimshot
      dex
    ];

    wayland.windowManager.mango = {
      enable = true;
      # package = pkgs.emptyDirectory;
      settings = {
        # More option see https://github.com/DreamMaoMao/mango/wiki/

        # Window effect
        blur = 1;
        blur_layer = 1;
        blur_optimized = 1;
        blur_params_num_passes = 2;
        blur_params_radius = 8;
        blur_params_noise = 0.02;
        blur_params_brightness = 1.0;
        blur_params_contrast = 1.0;
        blur_params_saturation = 1.2;

        shadows = 0;
        layer_shadows = 0;
        shadow_only_floating = 1;
        shadows_size = 10;
        shadows_blur = 15;
        shadows_position_x = 0;
        shadows_position_y = 0;
        shadowscolor = "0x000000ff";

        border_radius = 8;
        no_radius_when_single = 0;
        focused_opacity = common.settings.opacity.active;
        unfocused_opacity = common.settings.opacity.inactive;

        # Animation Configuration(support type:zoom,slide)
        # tag_animation_direction: 1-horizontal,0-vertical
        animations = 1;
        layer_animations = 1;
        tag_animation_direction = 1;
        zoom_initial_ratio = 0.3;
        zoom_end_ratio = 0.8;
        fadein_begin_opacity = 0.5;
        fadeout_begin_opacity = 0.8;

        animation_type = {
          open = "zoom";
          close = "zoom";
        };

        animation_fade = {
          "in" = 1;
          out = 1;
        };

        animation_duration = {
          move = 256;
          open = 256;
          tag = 256;
          close = 256;
          focus = 0;
        };

        animation_curve = {
          open = "0.46,1.0,0.29,1";
          move = "0.46,1.0,0.29,1";
          tag = "0.46,1.0,0.29,1";
          close = "0.08,0.92,0,1";
          focus = "0.46,1.0,0.29,1";
          opafadeout = "0.5,0.5,0.5,0.5";
          opafadein = "0.46,1.0,0.29,1";
        };

        # Scroller Layout Setting
        scroller_structs = 20;
        scroller_default_proportion = 0.8;
        scroller_focus_center = 0;
        scroller_prefer_center = 1;
        edge_scroller_pointer_focus = 1;
        scroller_default_proportion_single = 1.0;
        scroller_proportion_preset = "0.5,0.8,1.0";

        # Master-Stack Layout Setting
        new_is_master = 0;
        default_mfact = 0.55;
        default_nmaster = 1;
        smartgaps = 0;

        # Overview Setting
        hotarea_size = 16;
        enable_hotarea = 1;
        hotarea_corner = 0;
        ov_tab_mode = 0;
        overviewgappi = 8;
        overviewgappo = 16;

        # Misc
        no_border_when_single = 1;
        axis_bind_apply_timeout = 100;
        focus_on_activate = 1;
        idleinhibit_ignore_visible = 0;
        sloppyfocus = 1;
        warpcursor = 1;
        focus_cross_monitor = 0;
        focus_cross_tag = 0;
        enable_floating_snap = 0;
        snap_distance = 30;
        cursor_size = toString config.stylix.cursor.size;
        cursor_theme = config.stylix.cursor.name;
        drag_tile_to_tile = 1;

        # keyboard
        repeat_rate = 25;
        repeat_delay = 600;
        numlockon = 0;
        xkb_rules_layout = "us";

        # Trackpad
        # need relogin to make it apply
        disable_trackpad = 0;
        tap_to_click = 1;
        tap_and_drag = 1;
        drag_lock = 1;
        trackpad_natural_scrolling = 1;
        disable_while_typing = 1;
        left_handed = 0;
        middle_button_emulation = 0;
        swipe_min_threshold = 1;

        # mouse
        # need relogin to make it apply
        mouse_natural_scrolling = 0;

        # Appearance
        gappih = 8;
        gappiv = 8;
        gappoh = 8;
        gappov = 8;
        scratchpad_width_ratio = 0.8;
        scratchpad_height_ratio = 0.9;
        borderpx = 1;
        rootcolor = colors.base00;
        bordercolor = colors.base03;
        focuscolor = colors.base0D;
        maximizescreencolor = colors.base00;
        urgentcolor = colors.base05;
        scratchpadcolor = colors.base07;
        globalcolor = colors.base07;
        overlaycolor = colors.base03;

        # layout support:
        # tile,scroller,grid,deck,monocle,center_tile,vertical_tile,vertical_scroller
        tagrule = [
          "id:1,layout_name:tile"
          "id:2,layout_name:tile"
          "id:3,layout_name:tile"
          "id:4,layout_name:tile"
          "id:5,layout_name:tile"
          "id:6,layout_name:tile"
          "id:7,layout_name:tile"
          "id:8,layout_name:tile"
          "id:9,layout_name:tile"
        ];

        # Key Bindings
        # key name refer to `xev` or `wev` command output,
        # mod keys name: super,ctrl,alt,shift,none
        bind = [
          # reload config
          "super+ctrl,r,spawn_shell,${builtins.concatStringsSep " " (common.qs ++ [ "kill ;" ] ++ common.qs)}"
          "super+shift,r,reload_config"

          # quick apps
          "super,space,spawn,${builtins.concatStringsSep " " common.launcher}"
          "super,comma,spawn,${builtins.concatStringsSep " " common.locker}"
          "super,return,spawn,${common.term}"
          "super,n,spawn,${common.notes}"
          "super,b,spawn,zsh -lc ${common.browser}"
          "super,e,spawn_shell,zsh -lc ${common.file-browser}"
          "super,w,spawn,${common.editor}"

          "super+shift,s,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy area"
          "none,print,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy active"
          "ctrl,print,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy window"
          "shift,print,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy output"
          "super+shift,v,spawn,${builtins.concatStringsSep " " (common.noctalia "launcher clipboard")}"
          "super,period,spawn,${builtins.concatStringsSep " " (common.noctalia "launcher emoji")}"

          # exit
          "super,q,killclient,"
          "super+ctrl+alt,q,quit"

          # switch window focus
          "super,Tab,focusstack,next"
          "super,h,focusdir,left"
          "super,l,focusdir, right"
          "super,k,focusdir,up"
          "super,j,focusdir,down"

          # swap window
          "super+shift,h,exchange_client,left"
          "super+shift,l,exchange_client, right"
          "super+shift,k,exchange_client,up"
          "super+shift,j,exchange_client,down"

          # switch window status
          "alt,Tab,toggleoverview,"
          "super,g,toggleglobal,"
          "super,f,togglefloating"
          "super,backslash,togglefloating,"
          "super,m,togglemaximizescreen,"
          "super+shift,f,togglefullscreen,"
          "super,i,minimized,"
          "super+shift,i,restore_minimized"
          "super,z,toggle_scratchpad"

          # scroller layout
          "super+alt,e,set_proportion,1.0"
          "super+alt,x,switch_proportion_preset,"

          # switch layout
          "super,v,switch_layout"
          "super,t,setlayout,tile"
          "super,s,setlayout,scroller"
          # tag switch
          "super,left,viewtoleft,0"
          "super,right,viewtoright,0"
          "ctrl+super,left,tagtoleft,0"
          "ctrl+super,right,tagtoright,0"
          "super,1,view,1,0"
          "super,2,view,2,0"
          "super,3,view,3,0"
          "super,4,view,4,0"
          "super,5,view,5,0"
          "super,6,view,6,0"
          "super,7,view,7,0"
          "super,8,view,8,0"
          "super,9,view,9,0"

          # tag: move client to the tag and focus it
          "super+ctrl,1,tag,1,0"
          "super+ctrl,2,tag,2,0"
          "super+ctrl,3,tag,3,0"
          "super+ctrl,4,tag,4,0"
          "super+ctrl,5,tag,5,0"
          "super+ctrl,6,tag,6,0"
          "super+ctrl,7,tag,7,0"
          "super+ctrl,8,tag,8,0"
          "super+ctrl,9,tag,9,0"

          # tagsilent: move client to the tag and not focus it
          "super+shift,1,tagsilent,1,0"
          "super+shift,2,tagsilent,2,0"
          "super+shift,3,tagsilent,3,0"
          "super+shift,4,tagsilent,4,0"
          "super+shift,5,tagsilent,5,0"
          "super+shift,6,tagsilent,6,0"
          "super+shift,7,tagsilent,7,0"
          "super+shift,8,tagsilent,8,0"
          "super+shift,9,tagsilent,9,0"
          # monitor switch
          "super+alt,h,focusmon,left"
          "super+alt,l,focusmon,right"
          "super+alt+shift,h,tagmon,left"
          "super+alt+shift,l,tagmon,right"
          # gaps
          "alt+shift,x,incgaps,1"
          "alt+shift,z,incgaps,-1"
          "alt+shift,r,togglegaps"
          # movewin
          "super+shift,up,movewin,+0,-50"
          "super+shift,down,movewin,+0,+50"
          "super+shift,left,movewin,-50,+0"
          "super+shift,right,movewin,+50,+0"
          # resizewin
          "super+ctrl,up,resizewin,+0,-50"
          "super+ctrl,down,resizewin,+0,+50"
          "super+ctrl,left,resizewin,-50,+0"
          "super+ctrl,right,resizewin,+50,+0"
        ];

        # media controls
        bindl = [
          "none,XF86MonBrightnessUp,spawn,${builtins.concatStringsSep " " (common.noctalia "brightness increase")}"
          "none,XF86MonBrightnessDown,spawn,${builtins.concatStringsSep " " (common.noctalia "brightness decrease")}"

          "none,XF86AudioRaiseVolume,spawn,${builtins.concatStringsSep " " (common.noctalia "volume increase")}"
          "none,XF86AudioLowerVolume,spawn,${builtins.concatStringsSep " " (common.noctalia "volume decrease")}"

          "none,XF86AudioMute,spawn,${builtins.concatStringsSep " " (common.noctalia "volume muteOutput")}"
          "none,XF86AudioMicMute,spawn,${builtins.concatStringsSep " " (common.noctalia "volume muteInput")}"

          "none,XF86AudioNext,spawn,${builtins.concatStringsSep " " (common.noctalia "media next")}"
          "none,XF86AudioPrev,spawn,${builtins.concatStringsSep " " (common.noctalia "media previous")}"

          "none,XF86AudioPlay,spawn,${builtins.concatStringsSep " " (common.noctalia "media playPause")}"
          "none,XF86AudioStop,spawn,${builtins.concatStringsSep " " (common.noctalia "media pause")}"

          "none,XF86PowerOff,spawn,${builtins.concatStringsSep " " (common.noctalia "sessionMenu toggle")}"
        ];

        # Mouse Button Bindings
        # btn_left and btn_right can't bind none mod key
        mousebind = [
          "super,btn_left,moveresize,curmove"
          "super,btn_middle,togglemaximizescreen,0"
          "super,btn_right,moveresize,curresize"
        ];

        # Axis Bindings
        axisbind = [
          "super,up,viewtoleft_have_client"
          "super,down,viewtoright_have_client"
        ];

        gesturebind = [
          # 3-finger: Window focus
          "none,left,3,focusdir,left"
          "none,right,3,focusdir,right"
          "none,up,3,focusdir,up"
          "none,down,3,focusdir,down"

          # 4-finger: Workspace navigation
          "none,left,4,viewtoright_have_client"
          "none,right,4,viewtoleft_have_client"
          "none,up,4,toggleoverview"
          "none,down,4,toggleoverview"
        ];

        layerrule = [
          "noanim:1,noblur:1,layer_name:selection"
          "noblur:1,layer_name:noctalia-background"
        ];

        monitorrule = [
          "name:^eDP-1$,scale:1.25"
        ];

        exec-once = [
          # Keep clipboard content after app closes
          "wl-clip-persist --clipboard regular --reconnect-tries 0"
          # Watch clipboard and store history
          "wl-paste --type text --watch cliphist store"

          "netbird-ui"
          "ibus-daemon"
          (builtins.concatStringsSep " " common.qs)
          "${config.xdg.configHome}/mango/autostart.sh"
        ];

      };

      autostart_sh = /* bash */ ''
        source $HOME/.nix-profile/etc/profile.d/hm-session-vars.sh
        dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP=mango
        systemctl --user start graphical-session.target
        ${pkgs.dex}/bin/dex -a
      '';
    };

    xdg.portal = {
      enable = true;
      extraPortals = with pkgs; [
        xdg-desktop-portal-wlr
        xdg-desktop-portal-gtk
        xdg-desktop-portal-gnome
      ];
      config = {
        common.default = [ "wlr" "gnome" "gtk" ];
        mango = {
          default = "gtk";
          "org.freedesktop.impl.portal.ScreenCast" = [ "wlr" ];
          "org.freedesktop.impl.portal.Screenshot" = [ "wlr" ];
          "org.freedesktop.impl.portal.Secret" = [ "gnome-keyring" ];
          "org.freedesktop.impl.portal.Inhibit" = [ "none" ];
        };
      };
    };
  };
}
