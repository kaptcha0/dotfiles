. "$HOME/.cargo/env"

export NVM_DIR=~/.nvm


eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

export PATH="$PATH:/usr/local/go/bin"
export PATH="$PATH:$HOME/.local/bin"
export PATH="$PATH:/opt/metasploit-framework/bin"
export PATH="$PATH:$(go env GOPATH)/bin"
source "/home/kaptcha/.rover/env"
