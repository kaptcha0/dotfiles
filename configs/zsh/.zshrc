HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt SHARE_HISTORY

# User configuration
source "$HOME/.zshenv"
eval "$(starship init zsh)"
eval "$(direnv hook zsh)"

source "$ZSH_CUSTOM_CONFIG_DIR/functions.zsh"

source "$ZSH_CUSTOM_CONFIG_DIR/bindings.zsh"

fastfetch

