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
zinit ice svn
zinit snippet OMZ::plugins/command-not-found
zinit ice svn
zinit snippet OMZ::plugins/dotenv
zinit ice svn
zinit snippet OMZ::plugins/sudo

## Completion
zinit ice svn blockf
zinit snippet OMZ::plugins/docker
zinit ice svn blockf
zinit snippet OMZ::plugins/git
zinit ice svn blockf
zinit snippet OMZ::plugins/fzf
zinit ice svn blockf
zinit snippet OMZ::plugins/kubectl
zinit ice svn blockf
zinit snippet OMZ::plugins/nmap
zinit ice svn blockf
zinit snippet OMZ::plugins/nvm
zinit ice blockf
zinit light zsh-users/zsh-completions
zinit ice svn
zinit snippet OMZ::plugins/z


## Others
zinit light jirutka/zsh-shift-select

zinit light sunlei/zsh-ssh

zinit ice wait"2"
zinit light hlissner/zsh-autopair

zinit light marlonrichert/zsh-autocomplete
zinit light zsh-users/zsh-syntax-highlighting

zinit ice wait"1"
zinit light Aloxaf/fzf-tab

zinit self-update
zinit update --parallel
