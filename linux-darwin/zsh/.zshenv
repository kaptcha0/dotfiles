export ZSH="$HOME/.config/zsh"

source "$HOME/.profile"
source "$ZSH/variables.zsh"

source "$ZSH/aliases.zsh"
source "$ZSH/zinit.zsh"
[ -s "$HOME/.cargo/env" ] && source "$HOME/.cargo/env"
