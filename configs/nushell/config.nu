$env.config.edit_mode = 'vi'
$env.config.buffer_editor = 'hx'
$env.config.show_banner = false

# $env.CARAPACE_BRIDGES = 'zsh,fish,bash,inshellisense' # optional
# mkdir ~/.cache/carapace
# carapace _carapace nushell | save --force ~/.cache/carapace/init.nu

mkdir ($nu.data-dir | path join "vendor/autoload")
starship init nu | save -f ($nu.data-dir | path join "vendor/autoload/starship.nu")

# source ~/.zoxide.nu

fastfetch
