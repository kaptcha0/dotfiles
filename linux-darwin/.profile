export PATH="$PATH:/usr/local/go/bin"
export PATH="$PATH:$HOME/.local/bin"
export PATH="$PATH:/opt/metasploit-framework/bin"
export PATH="$PATH:/snap/bin"

if [ -d $HOME/.nix-profile/etc/profile.d ]; then
  for i in $HOME/.nix-profile/etc/profile.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
fi

# pnpm
export PNPM_HOME="/home/kaptcha/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

source "$HOME/.nix-profile/etc/profile.d/hm-session-vars.sh"
. "$HOME/.cargo/env"
