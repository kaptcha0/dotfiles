export ZSH="$HOME/.config/zsh"

source "$HOME/.profile"

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt SHARE_HISTORY

# User configuration

eval "$(starship init zsh)"

source "$ZSH/themes/current.zsh"

source "$ZSH/env-variables.zsh"
source "$ZSH/aliases.zsh"
source "$ZSH/bindings.zsh"
source "$ZSH/completions.zsh"
source "$ZSH/zinit.zsh"

fastfetch

# pnpm
export PNPM_HOME="$HOME/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

[ -f $ZSH/.fzf.zsh ] && source $ZSH/.fzf.zsh

