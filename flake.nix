{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    fh.url = "https://flakehub.com/f/DeterminateSystems/fh/*";
    nixgl.url = "github:nix-community/nixGL";

    niri-flake = {
      url = "github:sodiboo/niri-flake";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    noctalia = {
      url = "github:noctalia-dev/noctalia-shell";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    apple-fonts = {
      url = "github:Lyndeno/apple-fonts.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    sf-mono-liga-src = {
      url = "github:shaunsingh/SFMono-Nerd-Font-Ligaturized";
      flake = false;
    };

    spicetify-nix = {
      url = "github:Gerg-L/spicetify-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    stylix = {
      url = "github:danth/stylix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    {
      nixpkgs,
      home-manager,
      nixgl,
      ...
    }@inputs:
    let
      system = "x86_64-linux";
      fh-overlay = final: prev: {
        fh = inputs.fh.packages."${prev.system}".default;
      };
      sf-mono-ligatures-overlay = (
        final: prev: {
          sf-mono-liga-bin = prev.stdenvNoCC.mkDerivation  {
            pname = "sf-mono-liga-bin";
            version = "dev";
            src = inputs.sf-mono-liga-src;
            dontConfigure = true;
            installPhase = ''
              mkdir -p $out/share/fonts/opentype
              cp -R $src/*.otf $out/share/fonts/opentype/
            '';
          };
        }
      );
      pkgs = import nixpkgs {
        inherit system;
        overlays = [
          nixgl.overlay
          fh-overlay
          sf-mono-ligatures-overlay
        ];
      };
    in
    {
      homeConfigurations."kaptcha0" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = { inherit inputs nixgl; };

        modules = [
          ./hosts/kaptcha0-laptop/home.nix
          ./modules/home-manager

          inputs.stylix.homeModules.stylix
          inputs.spicetify-nix.homeManagerModules.spicetify
          inputs.niri-flake.homeModules.niri
          inputs.niri-flake.homeModules.stylix
          inputs.noctalia.homeModules.default
        ];
      };
    };
}
