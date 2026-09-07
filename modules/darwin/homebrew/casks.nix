{ ... }: {
  homebrew.casks = [
    "blip"
    "anytype"
    "desktoppr"
  ];

  nix-homebrew = {
    trust.casks = [ ];
  };
}
