{ pkgs, self, ... }:
pkgs.stdenv.mkDerivation rec {

  pname = "kaptcha0-shell";
  version = "1.0.0";

  src = ./.;

  image =
    if builtins.hasAttr "image" self then self.image else (throw "no background image provided");
  colorScheme =
    if builtins.hasAttr "colorScheme" self then
      self.colorScheme
    else
      (throw "no color scheme provided");
  quickshellPackage = if builtins.hasAttr "quickshellPackage" self then self.package else null;
  mergeMode = if builtins.hasAttr "mergeMode" self then self.mergeMode else false;

  dontUnpack = true;
  dontBuild = true;

  installPhase = ''
                echo "installing quickshell into ~/.config/quickshell"
                target="\$HOME/.config/quickshell"

                if [ "${mergeMode}" = "false" ]; then
                    echo "Replace mode selected: removing existing config directory."
                    rm -rf "\$target"
                else
                    echo "Merge mode selected: preserving existing files where possible."
                fi

                mkdir -p "\$target/assets"
                echo "copying source files from ${src}"
                cp -r ${src}/* "\$target/"

                echo "copying background image"
                cp ${image} "\$target/assets/bg"

                echo "copying color scheme"
                cp ${colorScheme} "\$target/assets/palette.json"

                mkdir -p $out/bin
                echo "creating launcher script"

                cat << 'EOF' > $out/bin/kaptcha0-shell
    #!/usr/bin/env bash
    # Wrapper script for QuickShell
    # This script launches QuickShell using the configured package (if provided)
    # or falls back to a system-installed 'quickshell' executable.

    set -e

    if [ -n "${if quickshellPackage != null then "${quickshellPackage}/bin/quickshell" else ""}" ]; then
        exec ${
          if quickshellPackage != null then "${quickshellPackage}/bin/quickshell" else "quickshell"
        } "\$@"
    else
        if ! command -v quickshell >/dev/null 2>&1; then
        echo "Error: QuickShell executable not found. Please install it or pass a 'quickshellPackage' argument."
        exit 1
        fi
        exec quickshell "\$@"
    fi
    EOF
                chmod +x $out/bin/kaptcha0-shell

                echo "Installation complete. You can run 'kaptcha0-shell' to launch QuickShell with your configuration."
  '';
}
