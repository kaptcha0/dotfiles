{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
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
    };
  };
  outputs =
    { self, nixpkgs, ... }@inputs:
    {
      nixosConfigurations.laptop = nixpkgs.lib.nixosSystem {
        specialArgs = { inherit inputs; };
        modules = [
          ./hosts/laptop/configuration.nix
          ./modules/nixos
          inputs.stylix.nixosModules.stylix
          inputs.home-manager.nixosModules.default
          inputs.musnix.nixosModules.musnix
        ];
      };

      homeManagerModules.default = ./modules/home-manager;
    };
}
