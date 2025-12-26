$env.config.edit_mode = 'vi'
# $env.config.buffer_editor = 'hx'
$env.config.show_banner = false

# source $"($nu.cache-dir)/carapace.nu"

mkdir ($nu.data-dir | path join "vendor/autoload")
# starship init nu | save -f ($nu.data-dir | path join "vendor/autoload/starship.nu")

# source ~/.zoxide.nu

fastfetch
