autoload -Uz compinit
compinit

source <(gh completion --shell zsh)

fpath=($HOME/.nix-profile/share/zsh/site-functions $fpath)

if type brew &>/dev/null
then
  fpath=($(brew --prefix)/share/zsh/site-functions $fpath)
fi

