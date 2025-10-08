{
  description = "quickshell setup";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      self,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      rec {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            gammaray
            lldb
            gdb
            kdePackages.qtdeclarative
          ];
        };

        packages.kaptcha0-shell = (
          import ./package.nix {
            inherit pkgs self;
          }
        );

        packages.default = packages.kaptcha0-shell;
      }
    );
}
