export ZSH="$HOME/.config/zsh"

[ -f "$HOME/.profile" ] && source "$HOME/.profile"
source "$ZSH/variables.zsh"

source "$ZSH/aliases.zsh"
source "$ZSH/zinit.zsh"
