HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt SHARE_HISTORY

fastfetch

# User configuration
eval "$(starship init zsh)"

source "$ZSH/themes/catppuccin_mocha-zsh-syntax-highlighting.zsh"
ZSH_AUTOSUGGEST_STRATEGY=(history completion)

source "$HOME/.zshenv"
source "$ZSH/functions.zsh"

source "$ZSH/themes/current.zsh"

source "$ZSH/bindings.zsh"
source "$ZSH/completions.zsh"


[ -f $ZSH/.fzf.zsh ] && source $ZSH/.fzf.zsh

### Added by Zinit's installer
if [[ ! -f $HOME/.local/share/zinit/zinit.git/zinit.zsh ]]; then
    print -P "%F{33} %F{220}Installing %F{33}ZDHARMA-CONTINUUM%F{220} Initiative Plugin Manager (%F{33}zdharma-continuum/zinit%F{220})…%f"
    command mkdir -p "$HOME/.local/share/zinit" && command chmod g-rwX "$HOME/.local/share/zinit"
    command git clone https://github.com/zdharma-continuum/zinit "$HOME/.local/share/zinit/zinit.git" && \
        print -P "%F{33} %F{34}Installation successful.%f%b" || \
        print -P "%F{160} The clone has failed.%f%b"
fi

source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit
### End of Zinit's installer chunk
