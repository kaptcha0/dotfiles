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
      package = pkgs.emptyDirectory;
      settings = /* conf */ ''
        # More option see https://github.com/DreamMaoMao/mango/wiki/

        # Window effect
        blur=1
        blur_layer=1
        blur_optimized=1
        blur_params_num_passes = 2
        blur_params_radius = 8
        blur_params_noise = 0.02
        blur_params_brightness = 1.0
        blur_params_contrast = 1.0
        blur_params_saturation = 1.2

        shadows = 0
        layer_shadows = 0
        shadow_only_floating = 1
        shadows_size = 10
        shadows_blur = 15
        shadows_position_x = 0
        shadows_position_y = 0
        shadowscolor= 0x000000ff

        border_radius=8
        no_radius_when_single=0
        focused_opacity=0.95
        unfocused_opacity=0.85

        # Animation Configuration(support type:zoom,slide)
        # tag_animation_direction: 1-horizontal,0-vertical
        animations=1
        layer_animations=1
        animation_type_open=zoom
        animation_type_close=zoom
        animation_fade_in=1
        animation_fade_out=1
        tag_animation_direction=1
        zoom_initial_ratio=0.3
        zoom_end_ratio=0.8
        fadein_begin_opacity=0.5
        fadeout_begin_opacity=0.8
        animation_duration_move=256
        animation_duration_open=256
        animation_duration_tag=256
        animation_duration_close=256
        animation_duration_focus=0
        animation_curve_open=0.46,1.0,0.29,1
        animation_curve_move=0.46,1.0,0.29,1
        animation_curve_tag=0.46,1.0,0.29,1
        animation_curve_close=0.08,0.92,0,1
        animation_curve_focus=0.46,1.0,0.29,1
        animation_curve_opafadeout=0.5,0.5,0.5,0.5
        animation_curve_opafadein=0.46,1.0,0.29,1

        # Scroller Layout Setting
        scroller_structs=20
        scroller_default_proportion=0.8
        scroller_focus_center=0
        scroller_prefer_center=1
        edge_scroller_pointer_focus=1
        scroller_default_proportion_single=1.0
        scroller_proportion_preset=0.5,0.8,1.0

        # Master-Stack Layout Setting
        new_is_master=0
        default_mfact=0.55
        default_nmaster=1
        smartgaps=0

        # Overview Setting
        hotarea_size=16
        enable_hotarea=1
        hotarea_corner=0
        ov_tab_mode=0
        overviewgappi=8
        overviewgappo=16

        # Misc
        no_border_when_single=1
        axis_bind_apply_timeout=100
        focus_on_activate=1
        idleinhibit_ignore_visible=0
        sloppyfocus=1
        warpcursor=1
        focus_cross_monitor=0
        focus_cross_tag=0
        enable_floating_snap=0
        snap_distance=30
        cursor_size=${toString config.stylix.cursor.size}
        cursor_theme=${config.stylix.cursor.name}
        drag_tile_to_tile=1

        # keyboard
        repeat_rate=25
        repeat_delay=600
        numlockon=0
        xkb_rules_layout=us

        # Trackpad
        # need relogin to make it apply
        disable_trackpad=0
        tap_to_click=1
        tap_and_drag=1
        drag_lock=1
        trackpad_natural_scrolling=1
        disable_while_typing=1
        left_handed=0
        middle_button_emulation=0
        swipe_min_threshold=1

        # mouse
        # need relogin to make it apply
        mouse_natural_scrolling=0

        # Appearance
        gappih=8
        gappiv=8
        gappoh=8
        gappov=8
        scratchpad_width_ratio=0.8
        scratchpad_height_ratio=0.9
        borderpx=1
        rootcolor=${colors.base00}
        bordercolor=${colors.base03}
        focuscolor=${colors.base0D}
        maximizescreencolor=${colors.base00}
        urgentcolor=${colors.base05}
        scratchpadcolor=${colors.base07}
        globalcolor=${colors.base07}
        overlaycolor=${colors.base03}

        # layout support:
        # tile,scroller,grid,deck,monocle,center_tile,vertical_tile,vertical_scroller
        tagrule=id:1,layout_name:tile
        tagrule=id:2,layout_name:tile
        tagrule=id:3,layout_name:tile
        tagrule=id:4,layout_name:tile
        tagrule=id:5,layout_name:tile
        tagrule=id:6,layout_name:tile
        tagrule=id:7,layout_name:tile
        tagrule=id:8,layout_name:tile
        tagrule=id:9,layout_name:tile

        # Key Bindings
        # key name refer to `xev` or `wev` command output,
        # mod keys name: super,ctrl,alt,shift,none

        # reload config
        bind=super+ctrl,r,spawn_shell,${
          builtins.concatStringsSep " " (common.qs ++ [ "kill ;" ] ++ common.qs)
        }
        bind=super+shift,r,reload_config

        # quick apps
        bind=super,space,spawn,${builtins.concatStringsSep " " common.launcher}
        bind=super,comma,spawn,${builtins.concatStringsSep " " common.locker}
        bind=super,return,spawn,${common.term}
        bind=super,n,spawn,${common.notes}
        bind=super,b,spawn,${common.browser}
        bind=super,e,spawn_shell,zsh -lc ${common.file-browser}
        bind=super,w,spawn,${common.editor}

        bind=super+shift,s,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy area
        bind=none,print,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy active
        bind=ctrl,print,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy window
        bind=shift,print,spawn,${pkgs.sway-contrib.grimshot}/bin/grimshot --notify savecopy output

        bind=super+shift,v,spawn,${builtins.concatStringsSep " " (common.noctalia "launcher clipboard")}
        bind=super,period,spawn,${builtins.concatStringsSep " " (common.noctalia "launcher emoji")}

        # exit
        bind=super,q,killclient,
        bind=super+ctrl+alt,q,quit

        # switch window focus
        bind=super,Tab,focusstack,next
        bind=super,h,focusdir,left
        bind=super,l,focusdir, right
        bind=super,k,focusdir,up
        bind=super,j,focusdir,down

        # swap window
        bind=super+shift,h,exchange_client,left
        bind=super+shift,l,exchange_client, right
        bind=super+shift,k,exchange_client,up
        bind=super+shift,j,exchange_client,down

        # switch window status
        bind=alt,Tab,toggleoverview,
        bind=super,g,toggleglobal,
        bind=super,f,togglefloating
        bind=super,backslash,togglefloating,
        bind=super,m,togglemaximizescreen,
        bind=super+shift,f,togglefullscreen,
        bind=super,i,minimized,
        bind=super+shift,i,restore_minimized
        bind=super,z,toggle_scratchpad

        # scroller layout
        bind=super+alt,e,set_proportion,1.0
        bind=super+alt,x,switch_proportion_preset,

        # switch layout
        bind=super,v,switch_layout
        bind=super,t,setlayout,tile
        bind=super,s,setlayout,scroller

        # tag switch
        bind=super,left,viewtoleft,0
        bind=ctrl,left,viewtoleft_have_client,0
        bind=super,right,viewtoright,0
        bind=ctrl,right,viewtoright_have_client,0
        bind=ctrl+super,left,tagtoleft,0
        bind=ctrl+super,light,tagtoright,0

        bind=super,1,view,1,0
        bind=super,2,view,2,0
        bind=super,3,view,3,0
        bind=super,4,view,4,0
        bind=super,5,view,5,0
        bind=super,6,view,6,0
        bind=super,7,view,7,0
        bind=super,8,view,8,0
        bind=super,9,view,9,0

        # tag: move client to the tag and focus it
        # tagsilent: move client to the tag and not focus it
        # bind=Alt,1,tagsilent,1
        bind=super+ctrl,1,tag,1,0
        bind=super+ctrl,2,tag,2,0
        bind=super+ctrl,3,tag,3,0
        bind=super+ctrl,4,tag,4,0
        bind=super+ctrl,5,tag,5,0
        bind=super+ctrl,6,tag,6,0
        bind=super+ctrl,7,tag,7,0
        bind=super+ctrl,8,tag,8,0
        bind=super+ctrl,9,tag,9,0

        bind=super+shift,1,tagsilent,1,0
        bind=super+shift,2,tagsilent,2,0
        bind=super+shift,3,tagsilent,3,0
        bind=super+shift,4,tagsilent,4,0
        bind=super+shift,5,tagsilent,5,0
        bind=super+shift,6,tagsilent,6,0
        bind=super+shift,7,tagsilent,7,0
        bind=super+shift,8,tagsilent,8,0
        bind=super+shift,9,tagsilent,9,0

        # monitor switch
        bind=super+alt,h,focusmon,left
        bind=super+alt,l,focusmon,right
        bind=super+alt+shift,h,tagmon,left
        bind=super+alt+shift,l,tagmon,right

        # gaps
        bind=alt+shift,x,incgaps,1
        bind=alt+shift,z,incgaps,-1
        bind=alt+shift,r,togglegaps

        # movewin
        bind=super+shift,up,movewin,+0,-50
        bind=super+shift,down,movewin,+0,+50
        bind=super+shift,left,movewin,-50,+0
        bind=super+shift,right,movewin,+50,+0

        # resizewin
        bind=super+ctrl,up,resizewin,+0,-50
        bind=super+ctrl,down,resizewin,+0,+50
        bind=super+ctrl,left,resizewin,-50,+0
        bind=super+ctrl,right,resizewin,+50,+0

        # media controls
        bindl=none,XF86MonBrightnessUp,spawn,${builtins.concatStringsSep " " (common.noctalia "brightness increase")}
        bindl=none,XF86MonBrightnessDown,spawn,${builtins.concatStringsSep " " (common.noctalia "brightness decrease")}

        bindl=none,XF86AudioRaiseVolume,spawn,${builtins.concatStringsSep " " (common.noctalia "volume increase")}
        bindl=none,XF86AudioLowerVolume,spawn,${builtins.concatStringsSep " " (common.noctalia "volume decrease")}

        bindl=none,XF86AudioMute,spawn,${builtins.concatStringsSep " " (common.noctalia "volume muteOutput")}
        bindl=none,XF86AudioMicMute,spawn,${builtins.concatStringsSep " " (common.noctalia "volume muteInput")}

        bindl=none,XF86AudioNext,spawn,${builtins.concatStringsSep " " (common.noctalia "media next")}
        bindl=none,XF86AudioPrev,spawn,${builtins.concatStringsSep " " (common.noctalia "media previous")}

        bindl=none,XF86AudioPlay,spawn,${builtins.concatStringsSep " " (common.noctalia "media playPause")}
        bindl=none,XF86AudioStop,spawn,${builtins.concatStringsSep " " (common.noctalia "media pause")}

        bindl=none,XF86PowerOff,spawn,${builtins.concatStringsSep " " (common.noctalia "sessionMenu toggle")}

        # Mouse Button Bindings
        # btn_left and btn_right can't bind none mod key
        mousebind=super,btn_left,moveresize,curmove
        mousebind=super,btn_middle,togglemaximizescreen,0
        mousebind=super,btn_right,moveresize,curresize

        # Axis Bindings
        axisbind=super,up,viewtoleft_have_client
        axisbind=super,down,viewtoright_have_client

        # 3-finger: Window focus
        gesturebind=none,left,3,focusdir,left
        gesturebind=none,right,3,focusdir,right
        gesturebind=none,up,3,focusdir,up
        gesturebind=none,down,3,focusdir,down

        # 4-finger: Workspace navigation
        gesturebind=none,left,4,viewtoleft_have_client
        gesturebind=none,right,4,viewtoright_have_client
        gesturebind=none,up,4,toggleoverview
        gesturebind=none,down,4,toggleoverview

        layerrule=noanim:1,noblur:1,layer_name:selection
        layerrule=blur:1,layer_name:noctalia-background

        # Keep clipboard content after app closes
        exec-once=wl-clip-persist --clipboard regular --reconnect-tries 0
        # Watch clipboard and store history
        exec-once=wl-paste --type text --watch cliphist store

        exec-once=netbird-ui
        exec-once=ibus-daemon
        exec-once=${config.xdg.configHome}/mango/autostart.sh

      '';
      autostart_sh = /* bash */ ''
        source $HOME/.nix-profile/etc/profile.d/hm-session-vars.sh
        dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP=mango
        systemctl --user start graphical-session.target
        ${pkgs.dex}/bin/dex -a

        ${builtins.concatStringsSep " " common.qs} &
      '';
    };

    xdg.portal = {
      enable = true;
      extraPortals = with pkgs; [
        xdg-desktop-portal-wlr
        xdg-desktop-portal-gtk
      ];
      config = {
        common.default = [ "gtk" ];
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
