{ pkgs, ... }:

{
  imports = [
    ./terminal-utils
    ./dev-utils
    ./cyber-utils

    ./stylix.nix
    ./hyprland.nix
  ];

  # home.packages = with pkgs; [
  #   wineWow64Packages.yabridge
  #   winetricks
  #   yabridgectl

  # ];
  # home.sessionVariables = {
  #   # Enable host Vulkan ICDs for Nix Wine
  #   VK_ICD_FILENAMES = "/usr/share/vulkan/icd.d/intel_icd.x86_64.json:/usr/share/vulkan/icd.d/intel_icd.i686.json";

  #   # Make Fedora's Vulkan layers visible
  #   VK_LAYER_PATH = "/usr/share/vulkan/explicit_layer.d";
  # };

}
