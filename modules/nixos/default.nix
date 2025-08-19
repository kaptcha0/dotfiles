{ ... }:

{
  imports = [
    ./kde.nix
    ./utils.nix
    ./tailscale.nix
    ./gui-apps
    ./hyprland.nix
    ./stylix.nix
    ./xdg.nix
  ];
}
