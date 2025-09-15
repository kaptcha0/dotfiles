#!/usr/bin/env bash
systemctl --user start hyprpolkitagent
systemctl --user start nm-applet
hyprpaper &
hypridle &
wl-paste --type text --watch cliphist store &
wl-paste --type image --watch cliphist store &

dbus-update-activation-environment --systemd HYPRLAND_INSTANCE_SIGNATURE &
udiskie &
hyprsunset &
pasystray &
blueman-applet &
kdeconnect-indicator &

kaptcha0-bar &
