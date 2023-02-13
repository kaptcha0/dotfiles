autoload -Uz compinit
compinit

source <(kubectl completion zsh)
source <(gh completion -s zsh)
source <(buf completion zsh)

if type brew &>/dev/null
then
  FPATH="$(brew --prefix)/share/zsh/site-functions:${FPATH}"
  source $(brew --prefix nvm)/nvm.sh
  source $(brew --prefix nvm)/etc/bash_completion.d/nvm
fi

