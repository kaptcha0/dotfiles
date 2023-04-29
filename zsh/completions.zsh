autoload -Uz compinit
compinit

source <(gh completion --shell zsh)
source <(buf completion zsh)

if type brew &>/dev/null
then
  FPATH="$(brew --prefix)/share/zsh/site-functions:${FPATH}"
fi

