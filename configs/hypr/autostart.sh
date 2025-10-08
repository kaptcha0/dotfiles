#!/usr/bin/env zsh

systemctl --user start hyprpolkitagent
systemctl --user start nm-applet
hypridle &
wl-paste --type text --watch cliphist store &
wl-paste --type image --watch cliphist store &
swaync &
hyprsunset &

quickshell -p ~/.dotfiles/configs/quickshell &

dbus-update-activation-environment --systemd HYPRLAND_INSTANCE_SIGNATURE &
udiskie &
pasystray &
blueman-applet &
kdeconnect-indicator &

