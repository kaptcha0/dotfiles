{ pkgs }: {
  packages = with pkgs; [
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
