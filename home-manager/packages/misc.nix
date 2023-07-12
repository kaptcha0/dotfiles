{ pkgs }:
{
  packages = with pkgs; [
    neofetch
    nixpkgs-fmt
    rnix-lsp
    nerdfonts
  ];
}
