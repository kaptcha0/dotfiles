. "$HOME/.cargo/env"

export NVM_DIR=~/.nvm


eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

export PATH="$PATH:/usr/local/go/bin"
export PATH="$PATH:$HOME/.local/bin"
export PATH="$PATH:$(go env GOPATH)/bin"
export PATH="$PATH:/opt/metasploit-framework/bin"

if [ -d $HOME/.nix-profile/etc/profile.d ]; then
  for i in $HOME/.nix-profile/etc/profile.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
fi
