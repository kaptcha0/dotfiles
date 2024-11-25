#!/usr/bin/env bash

INSTALL_ALL=0

prompt() {
  echo "Do you wish to install $1?"
  select option in "Yes" "No" "All" "Cancel"; do
    case $option in
    Yes) return 1 ;;
    No) return 0 ;;
    All)
      INSTALL_ALL=1
      return 1
      ;;
    Cancel)
      echo "Cancelling installation..."
      exit
      ;;
    esac
  done
}

install() {
  local name=$1
  local install_command=$2
  local cmd=${3:-$name}

  echo "Attempting to install $name"
  if ([[ -n ${4+x} ]] && ($SHELL -c "$4")) || command -v "$cmd"; then
    echo "Tool is already installed, skipping installation"
    return
  fi

  if [[ $INSTALL_ALL -eq 0 ]] && prompt "$name" -eq 0; then
    echo "Installation cancelled"
    return
  fi

  echo "Installing..."
  $SHELL -c "$install_command"

  echo "Done."
  echo
}

install "nix" "sh <(curl -L https://nixos.org/nix/install) --daemon"
install "nix unstable channel" "nix-channel --add https://nixos.org/channels/nixpkgs-unstable nixos" "" "nix-channel --list | cut -d' ' -f1 | grep -q nixos"
install "nix unstable channel" "nix-channel --add https://nixos.org/channels/nixpkgs-23.05 nixpkgs-23.05" "" "nix-channel --list | cut -d' ' -f1 | grep -q nixpkgs-23.05"
install "home-manager" "nix run home-manager/master -- init"
install "home-manager tools" "nix run home-manager/master -- switch" "svn"

install "rust" "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh" "rustup"
GO_VERSION="go1.21.5.linux-amd64"
install "go" "wget https://go.dev/dl/$GO_VERSION.tar.gz ; sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf $GO_VERSION.tar.gz && rm -f $GO_VERSION.tar.gz"

# install "tmux" "sudo apt install tmux"
install "starship" "curl -sS https://starship.rs/install.sh | sh" "starship"

echo "Complete."
