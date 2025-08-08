$env.config.edit_mode = 'vi'
$env.config.buffer_editor = 'hx'

source ~/.cache/carapace/init.nu
source ~/.zoxide.nu

jj util completion nushell | save completions-jj.nu
use completions-jj.nu *  # Or `source completions-jj.nu`
