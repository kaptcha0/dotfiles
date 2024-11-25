#! /bin/bash

eww open topbar &
hyprpaper &
wl-paste --type text --watch cliphist store &
wl-paste --type image --watch cliphist store &
hypridle &
wp-notifyd &

systemctl --user start hyprpolkitagent

hyprpm reload -n

sleep 1
dex -as ~/.config/autostart
