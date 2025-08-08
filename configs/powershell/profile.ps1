# Env Variables
$env:CONFIG_DIR = "$HOME\.config"

# Prompt
Invoke-Expression (&starship init powershell)

# PSReadLine
Import-Module PSReadLine

Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -EditMode Emacs
Set-PSReadLineOption -BellStyle None

Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward


# Fzf
Import-Module PSFzf

Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+f' -PSReadlineChordReverseHistory 'Ctrl+r'


# Icons
Import-Module Terminal-Icons

$env:CARAPACE_BRIDGES = 'zsh,fish,bash,inshellisense' # optional
Set-PSReadLineOption -Colors @{ "Selection" = "`e[7m" }
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
carapace _carapace | Out-String | Invoke-Expression

# Utilities
function which ($command) {
	Get-Command -Name $command -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Path -ErrorAction SilentlyContinue
}

Invoke-Expression (& { (jj util completion power-shell | Out-String) })

# Mise
$shimPath = "$env:USERPROFILE\AppData\Local\mise\shims"
$currentPath = [Environment]::GetEnvironmentVariable('Path', 'User')
$newPath = $currentPath + ";" + $shimPath
[Environment]::SetEnvironmentVariable('Path', $newPath, 'User')


# Aliases
Set-Alias vim neovide
Set-Alias ll ls
Set-Alias tig 'C:\Program Files\Git\usr\bin\tig.exe'
Set-Alias less 'C:\Program Files\Git\usr\bin\less.exe'
