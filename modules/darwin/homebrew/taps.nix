{ inputs, config, ... }: {
  homebrew.taps = builtins.attrNames config.nix-homebrew.taps;

  nix-homebrew = {
    # Optional: Declarative tap management
    taps = {
      "homebrew/homebrew-core" = inputs.homebrew-core;
      "homebrew/homebrew-cask" = inputs.homebrew-cask;
    };

    # Optional: Enable fully-declarative tap management
    #
    # With mutableTaps disabled, taps can no longer be added imperatively with `brew tap`.
    mutableTaps = false;

    # Optional: Declarative Homebrew tap trust entries.
    #
    # Note: The trust entries are _not_ removed if you remove them from those lists!
    # Use the `brew untrust` command to remove a trust entry.
    trust.taps = [ ];
  };
}
