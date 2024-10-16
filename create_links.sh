#!/usr/bin/env bash

CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}"
LOCAL_DIR="${XDG_DATA_HOME:-$HOME/.local/share}"
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

echo "Creating links to directories/files"

create_link() {
  ln -svn "$1" "$2"
}

create_config_link() {
  create_link "$1" "${2:-$CONFIG_DIR}"
}

create_local_link() {
  create_link "$1" "${2:-$LOCAL_DIR}"
}

echo "Config directory is $CONFIG_DIR"
create_config_link "$SCRIPT_DIR/fish"
create_config_link "$SCRIPT_DIR/helix"
create_config_link "$SCRIPT_DIR/home-manager"
create_config_link "$SCRIPT_DIR/hypr"
create_config_link "$SCRIPT_DIR/waybar"
create_config_link "$SCRIPT_DIR/rofi"
create_config_link "$SCRIPT_DIR/kitty"
create_config_link "$SCRIPT_DIR/nix"
create_config_link "$SCRIPT_DIR/nixpkgs"
create_config_link "$SCRIPT_DIR/nvim"
create_config_link "$SCRIPT_DIR/powershell"
create_config_link "$SCRIPT_DIR/starship.toml"
create_config_link "$SCRIPT_DIR/tmux"
create_config_link "$SCRIPT_DIR/dunst"
create_config_link "$SCRIPT_DIR/nwg-displays"
create_config_link "$SCRIPT_DIR/nwg-look"
create_config_link "$SCRIPT_DIR/nwg-panel"
create_config_link "$SCRIPT_DIR/wal"
create_config_link "$SCRIPT_DIR/mimeapps.list"
create_config_link "$SCRIPT_DIR/zed"
create_config_link "$SCRIPT_DIR/swaync"

ln -svn $SCRIPT_DIR/systemd/user/* "$CONFIG_DIR/systemd/user/"

mkdir -pv "$SCRIPT_DIR/zsh/logs"
create_config_link "$SCRIPT_DIR/zsh"
echo "Done."
echo

echo "Data directory is $LOCAL_DIR"
create_link "$SCRIPT_DIR/bin" "$LOCAL_DIR/../"
create_local_link "$SCRIPT_DIR/wordlists"
create_local_link "$SCRIPT_DIR/bgs"
echo "Done."
echo

echo "Creating misc links"
create_link "$SCRIPT_DIR/zsh/.zshrc" "$HOME"
create_link "$SCRIPT_DIR/zsh/.zshenv" "$HOME"

create_link "$SCRIPT_DIR/.profile" "$HOME"
create_link "$SCRIPT_DIR/.gdbinit" "$HOME"

sudo ln -svn "$SCRIPT_DIR/nix/nix.conf" "/nix"
echo "Done."
echo
