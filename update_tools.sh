#!/usr/bin/env bash

UPDATE_ALL=0
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

prompt() {
  echo "Do you wish to update $1?"
  select option in "Yes" "No" "All" "Cancel"; do
    case $option in
    Yes) return 1 ;;
    No) return 0 ;;
    All)
      UPDATE_ALL=1
      return 1
      ;;
    Cancel)
      echo "Cancelling updates..."
      exit
      ;;
    esac
  done
}

update() {
  local name=$1
  local update_command=$2
  local cmd=${3:-$name}

  echo "Attempting to install $name"
  if ! command -v "$cmd"; then
    echo "Tool is not installed, skipping update"
    return
  fi

  if [[ $UPDATE_ALL -eq 0 ]] && prompt "$name" -eq 0; then
    echo "Update cancelled"
    return
  fi

  echo "updating..."
  $SHELL -c "$update_command"

  echo "Done."
  echo
}

update "nix" "nix upgrade-nix"
update "nix-channel" "nix-channel --update; nix-env --install --attr nixpkgs.nix nixpkgs.cacert; systemctl daemon-reload; systemctl restart nix-daemon"
update "home-manager" "nix-channel --update; nix flake update $SCRIPT_DIR/home-manager; home-manager switch --refresh"
