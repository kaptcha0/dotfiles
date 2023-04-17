export ZSH="$HOME/.config/zsh"

source "$HOME/.profile"

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt SHARE_HISTORY

# User configuration

eval "$(starship init zsh)"
eval "$(pyenv init -)"

source "$ZSH/themes/current.zsh"

source "$ZSH/env-variables.zsh"
source "$ZSH/aliases.zsh"
source "$ZSH/bindings.zsh"
source "$ZSH/completions.zsh"
source "$ZSH/zinit.zsh"
# source "$ZSH/zplug.zsh"

fastfetch

# pnpm
export PNPM_HOME="/home/kaptcha/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

