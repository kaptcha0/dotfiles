source $HOME/.local/share/zinit/zinit.git/zinit.zsh

[ ! $(which zinit) ] && bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"

# Load a few important annexes, without Turbo
# (this is currently required for annexes)
zinit light-mode for \
    zdharma-continuum/zinit-annex-as-monitor \
    zdharma-continuum/zinit-annex-bin-gem-node \
    zdharma-continuum/zinit-annex-patch-dl \
    zdharma-continuum/zinit-annex-rust

### End of Zinit's installer chunk

## OMZ
zinit snippet OMZ::plugins/command-not-found
zinit snippet OMZ::plugins/dotenv
# zinit snippet OMZ::plugins/sudo

## Completion
# zinit ice as"completion"
# zinit snippet https://github.com/docker/cli/blob/master/contrib/completion/zsh/_docker

# zinit ice blockf
# zinit snippet OMZ::plugins/git

# zinit ice blockf
# zinit snippet OMZ::plugins/fzf

# zinit ice blockf
# zinit snippet OMZ::plugins/kubectl

# zinit ice blockf
# zinit light nix-community/nix-zsh-completions

# zinit ice blockf
# zinit snippet OMZ::plugins/nmap

zinit ice blockf
zinit light zsh-users/zsh-completions

## Others
zinit light jirutka/zsh-shift-select

zinit light sunlei/zsh-ssh

zinit ice wait lucid
zinit light hlissner/zsh-autopair

zinit ice wait lucid
zinit light zsh-users/zsh-syntax-highlighting

zinit light zsh-users/zsh-autosuggestions

zinit ice wait lucid
zinit light Aloxaf/fzf-tab

# zinit ice depth=1
# zinit light jeffreytse/zsh-vi-mode

zinit ice lucid wait'0'
zinit light joshskidmore/zsh-fzf-history-search

zinit snippet https://github.com/Multirious/zsh-helix-mode/blob/main/zsh-helix-mode.zsh

( zinit self-update > $ZSH/logs/zinit-self-update.log 2>&1 & )
( zinit update --all > $ZSH/logs/zinit-update.log 2>&1 & )
