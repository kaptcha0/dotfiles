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
  system.stateVersion = 7;
}
