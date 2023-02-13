export ZSH="$HOME/.config/zsh"

source $HOME/.profile

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt SHARE_HISTORY

# User configuration

PATH=$PATH:/opt/metasploit-framework/bin
export PATH=$PATH:/opt/metasploit-framework/bin


eval "$(starship init zsh)"

# pnpm
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

source "$ZSH/themes/current.zsh"

source "$ZSH/aliases.zsh"
source "$ZSH/bindings.zsh"
source "$ZSH/completions.zsh"
source "$ZSH/zplug.zsh"

fastfetch
