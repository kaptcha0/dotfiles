#!/usr/bin/env bash
systemctl --user start hyprpolkitagent
systemctl --user start nm-applet
hyprpaper &
dbus-update-activation-environment --systemd HYPRLAND_INSTANCE_SIGNATURE &
udiskie &
hyprsunset &
pasystray &
blueman-applet &

kaptcha0-bar &
