#!/usr/bin/env bash
systemctl --user start hyprpolkitagent
swww-daemon &
dbus-update-activation-environment --systemd HYPRLAND_INSTANCE_SIGNATURE &
udiskie &
hyprsunset &

kaptcha0-bar &
