{ pkgs }: {
  packages = with pkgs; [
    # LSPs
    cmake-language-server
    lua-language-server
    marksman
    nil
    nixpkgs-fmt
    taplo
    
    
    nodePackages_latest.bash-language-server
    nodePackages_latest.dockerfile-language-server-nodejs
    nodePackages_latest.pyright
    nodePackages_latest.svelte-language-server
    nodePackages_latest.typescript
    nodePackages_latest.typescript-language-server
    nodePackages_latest.vscode-langservers-extracted

    ## Ansible
    ansible-language-server
    ansible-lint

    # C/C++
    cmake
    gcc
    gdb
    gdbgui
    gnumake

    # Rust
    cargo
    rustc

    # Lua
    stylua

    # Kubernetes
    kube3d
    kubectl
    kubernetes-helm
    kustomize
    skaffold

    # Python
    python311Full
    virtualenv

    # Node.js
    nodejs_18
    nodePackages_latest.eslint
    nodePackages_latest.pnpm
    nodePackages_latest.prettier
  ];
}
