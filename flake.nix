{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    fh.url = "https://flakehub.com/f/DeterminateSystems/fh/*";
    nixgl.url = "github:nix-community/nixGL";

    niri-flake = {
      url = "github:sodiboo/niri-flake";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    apple-fonts = {
      url = "github:Lyndeno/apple-fonts.nix";
      inputs.nixpkgs.follows = "nixpkgs";
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
    system-manager = {
      url = "github:numtide/system-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    {
      nixpkgs,
      home-manager,
      system-manager,
      nixgl,
      ...
    }@inputs:
    let
      system = "x86_64-linux";
      fh-overlay = final: prev: {
        fh = inputs.fh.packages."${prev.system}".default;
      };
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ nixgl.overlay fh-overlay ];
      };
    in
    {
      systemConfigs.kaptcha0-laptop = system-manager.lib.makeSystemConfig {
        extraSpecialArgs = { inherit inputs; };
        modules = [
          ./hosts/kaptcha0-laptop/system.nix
          ./modules/system-manager
        ];
      };
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
        ];
      };
    };
}
