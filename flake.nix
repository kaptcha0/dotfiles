{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    hyprland.url = "github:hyprwm/Hyprland?rev=71a1216abcc7031776630a6d88f105605c4dc1c9";
    hyprland-plugins = {
      url = "github:hyprwm/hyprland-plugins";
      inputs.hyprland.follows = "hyprland";
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
    nixgl.url = "github:nix-community/nixGL";
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
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ nixgl.overlay ];
      };
    in
    {
      systemConfigs.kaptcha0-laptop = system-manager.lib.makeSystemConfig {
        modules = [
          ./hosts/kaptcha0-laptop/system.nix
          ./modules/system-manager
        ];
      };
      homeConfigurations."kaptcha0@kaptcha0-laptop" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;
        extraSpecialArgs = { inherit inputs nixgl; };

        modules = [
          ./hosts/kaptcha0-laptop/home.nix
          ./modules/home-manager
          inputs.stylix.homeModules.stylix
          inputs.spicetify-nix.homeManagerModules.spicetify
        ];
      };
    };
}
