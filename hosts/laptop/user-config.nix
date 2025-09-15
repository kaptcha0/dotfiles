{
  inputs,
  pkgs,
  ...
}:
let
  username = "kaptcha0";
in
{
  greeter.enable = true;
  kde.enable = true;
  hyprland.enable = true;
  utils.enable = true;
  nix-ld.enable = true;
  gui-apps-bundle.enable = true;
  theming.enable = true;

  tailscale.enable = true;
  programs.zsh.enable = true;
  
  services.logind.settings.Login = {
    HandleLidSwitch = "sleep";
    HandleLidSwitchExternalPower = "ignore";
    HandleLidSwitchDocked = "ignore";
  };

  home-manager = {
    extraSpecialArgs = { inherit inputs; };
    useGlobalPkgs = true;
    useUserPackages = true;
    backupFileExtension = "backup";
    users.${username}.imports = [
      ./home.nix
      inputs.self.outputs.homeManagerModules.default
    ];
  };

  users.users.${username} = {
    createHome = true;
    home = "/home/${username}";
    isNormalUser = true;
    extraGroups = [
      "wheel"
      "networkmanager"
      "audio"
      "wireshark"
    ]; # Enable ‘sudo’ for the user.
    shell = pkgs.zsh;
  };
}
