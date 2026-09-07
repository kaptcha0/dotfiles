{ config, ... }: {
  imports = [
    ./brews.nix
    ./casks.nix
    ./commands.nix
    ./formulae.nix
    ./masapps.nix
    ./taps.nix
  ];

  homebrew = {
    enable = true;

    onActivation = {
      autoUpdate = true;
      cleanup = "zap";
      upgrade = true;
    };
  };

  nix-homebrew = {
    # Install Homebrew under the default prefix
    enable = true;

    # Apple Silicon Only: Also install Homebrew under the default Intel prefix for Rosetta 2
    enableRosetta = true;

    # User owning the Homebrew prefix
    user = config.system.primaryUser;
  };
}
