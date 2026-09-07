{
  inputs,
  ...
}:
let
  self = inputs.self;
  in
{
  ## generic stuff for nix darwin
  nix.settings.experimental-features = "nix-command flakes";
  system.configurationRevision = self.rev or self.dirtyRev or null;

  nixpkgs.hostPlatform = "aarch64-darwin";
  nixpkgs.config.allowUnfree = true;
  system.stateVersion = 7;

  home-manager = {
    useGlobalPkgs = true;
    useUserPackages = true;
    extraSpecialArgs = { inherit inputs self; };
    users.kaptcha = ./home.nix;
    sharedModules = [
            inputs.stylix.homeModules.stylix
          ];
  };

  users.users.kaptcha = {
      name = "kaptcha";
      home = "/Users/kaptcha";
    };

}
