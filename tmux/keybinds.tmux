# Vertical split
unbind %
bind / split-window -h

# Horizontal split
unbind '"'
bind - split-window -v

# Reload config
bind r source-file ~/.config/tmux/tmux.conf

# Pane switching
bind -n M-Left select-pane -L
unbind h
bind h select-pane -L

bind -n M-Right select-pane -R
unbind l
bind l select-pane -R

bind -n M-Up select-pane -U
unbind k
bind k select-pane -U

bind -n M-Down select-pane -D
unbind j
bind j select-pane -D

# Sessions
unbind n
bind n new-session

unbind c
bind c choose-session

# Windows
bind -n C-t new-window
bind -n C-PgDn next-window
bind -n C-PgUp previous-window
bind -n C-M-q confirm -p "Kill this tmux session?" kill-session
