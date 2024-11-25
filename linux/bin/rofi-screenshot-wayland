#!/usr/bin/sh

# Display a selection menu using dmenu
get_option() {
    # Define the prompt and options
    local prompt="$1"
    declare -n map=$2
    local options=("${!map[@]}")

    # Display the options using dmenu or similar and capture the selection
    local selection=$(printf '%s\n' "${options[@]}" | rofi -dmenu -p "$prompt")

    # Return the value associated with the selection
    echo "${map[$selection]}"

}

# Get user input
get_input() {
    local prompt="$1"
    local default_input="$2"

    echo "$default_input" | rofi -dmenu -p "$prompt"
}

#TODO: Add missing source types
declare -A src_types=(
    ["🌐 All Monitors - Capture all connected monitors"]="monitors"
    #["💻 Current Screen - Capture the current screen"]="screen"
    #["🪟 Current Window - Capture the active window"]="window"
    ["🔲 Select Region - Manually select a screen region"]="region"
)

declare -A save_types=(
    ["🖼️ Save as PNG - Save the screenshot in PNG format"]="png"
    ["🖼️ Save as JPG - Save the screenshot in JPG format"]="jpg"
    ["📋 Copy to Clipboard - Copy the screenshot to clipboard"]="clipboard"
)

src=$(get_option "🖥️ Choose Screenshot Type:" src_types)
delay=$(get_input "🕒 Select Delay for Screenshot (in seconds):" "⚡ No Delay")
save=$(get_option "💾 Select Save Method:" save_types)

if [[ "$delay" == "⚡ No Delay" ]] then
    delay="0"
fi

sleep "$delay"

# Image locations
save_dir=${screenshot_dir:=~/Pictures}
mkdir -p "$save_dir"

file_name="Screenshot $(date '+%Y-%m-%d, %R:%S')"
file_path="$save_dir/$file_name.$save"
temp_path="/tmp/$file_name.$save"

# Capture image
case "$src" in
    region)
        grim -g "$(slurp)" "$temp_path"
        ;;
    monitors)
        grim "$temp_path"
        ;;
esac


# Handling save method
if [[ "$save" == "clipboard" ]] then
    wl-copy < "$temp_path"
    notify-send "📋 Screenshot Copied to Clipboard"
else
    cp "$temp_path" "$file_path"
    notify-send "Screenshot saved to" "$file_path"
    notify-send "$lang_saved" "$file_path"
fi

# Cleanup
rm "$temp_path"
