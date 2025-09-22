{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    volatile.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
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
    zen-browser = {
      url = "github:0xc000022070/zen-browser-flake";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    musnix = {
      url = "github:musnix/musnix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    kaptcha0-bar = {
      url = "path:./configs/ags";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    {
      nixpkgs,
      volatile,
      apple-fonts,
      ...
    }@inputs:
    let
      system = "x86_64-linux";
      volatilePkgs = import volatile { inherit system; };
    in
    {
      nixosConfigurations.kaptcha0-laptop = nixpkgs.lib.nixosSystem {
        specialArgs = { inherit inputs apple-fonts volatilePkgs; };
        modules = [
          ./hosts/laptop/configuration.nix
          ./modules/nixos
          inputs.stylix.nixosModules.stylix
          inputs.home-manager.nixosModules.default
          inputs.musnix.nixosModules.musnix
          inputs.kaptcha0-bar.nixosModules.kaptcha0-bar
          inputs.spicetify-nix.nixosModules.default
        ];
      };

      homeManagerModules.default = ./modules/home-manager;
    };
}
