export PATH="$PATH:/usr/local/go/bin"
export PATH="$PATH:$HOME/.local/bin"
export PATH="$PATH:/opt/metasploit-framework/bin"
export PATH="$PATH:/snap/bin"

# pnpm
export PNPM_HOME="/home/kaptcha/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

[ -s "$HOME/.cargo/env" ] && source "$HOME/.cargo/env"
