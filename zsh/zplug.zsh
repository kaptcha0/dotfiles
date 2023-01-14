if [[ ! -d ~/.zplug ]]; then
  git clone https://github.com/zplug/zplug ~/.zplug
  source ~/.zplug/init.zsh && zplug update --self
fi

source ~/.zplug/init.zsh

zplug 'zplug/zplug', hook-build:'zplug --self-manage'

## OMZ
zplug "plugins/command-not-found", from:oh-my-zsh
zplug "plugins/dotenv", from:oh-my-zsh
zplug "plugins/sudo", from:oh-my-zsh

## Completion
zplug "plugins/docker", from:oh-my-zsh
zplug "plugins/git", from:oh-my-zsh
zplug "plugins/fzf", from:oh-my-zsh
zplug "plugins/kubectl", from:oh-my-zsh
zplug "plugins/nmap", from:oh-my-zsh
zplug "plugins/nvm", from:oh-my-zsh
zplug "plugins/z", from:oh-my-zsh

## Others
zplug "hlissner/zsh-autopair", defer:2
zplug "marlonrichert/zsh-autocomplete"
zplug "zsh-users/zsh-completions"
zplug "zsh-users/zsh-syntax-highlighting"

if ! zplug check --verbose; then
    printf "Install? [y/N]: "
    if read -q; then
        echo; zplug install
    fi
fi

zplug load
