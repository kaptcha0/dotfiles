export ZSH="$HOME/.config/zsh"

source $HOME/.profile

# User configuration

PATH=$PATH:/opt/metasploit-framework/bin
export PATH=$PATH:/opt/metasploit-framework/bin

eval "$(starship init zsh)"
source $(brew --prefix nvm)/nvm.sh
source $(brew --prefix nvm)/etc/bash_completion.d/nvm

# pnpm
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

source "$ZSH/zplug.zsh"
source "$ZSH/aliases.zsh"
