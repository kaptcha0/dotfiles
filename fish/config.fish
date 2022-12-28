if status is-interactive
    # Commands to run in interactive sessions can go here
    starship init fish | source
    kubectl completion fish | source
end

bass source /etc/profile
bass source ~/.profile

# Sources
source $HOME/.config/fish/conf.d/abbr.fish
