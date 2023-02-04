export ZSH="$HOME/.config/zsh"

source $HOME/.profile

# User configuration

PATH=$PATH:/opt/metasploit-framework/bin
export PATH=$PATH:/opt/metasploit-framework/bin

autoload -U +X compinit && compinit

eval "$(starship init zsh)"

source <(kubectl completion zsh)
source <(gh completion -s zsh)

source $(brew --prefix nvm)/nvm.sh
source $(brew --prefix nvm)/etc/bash_completion.d/nvm

# pnpm
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

source "$ZSH/themes/current.zsh"

source "$ZSH/zplug.zsh"
source "$ZSH/aliases.zsh"

fastfetch
