export ZSH="$HOME/.config/zsh"
export EDITOR="hx"
export VISUAL="zeditor"

source "$HOME/.profile"
source "$ZSH/variables.zsh"

source "$ZSH/aliases.zsh"
source "$ZSH/zinit.zsh"
[ -s "$HOME/.cargo/env" ] && source "$HOME/.cargo/env"

export SOPS_AGE_KEY_FILE=$HOME/.sops/key.txt
