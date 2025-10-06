{
  osConfig,
  config,
  pkgs,
  lib,
  ...
}:

let
  link = config.lib.file.mkOutOfStoreSymlink;
  sherlock-launcher = (
    pkgs.runCommand "sherlock-launcher-renamed" { } ''
      mkdir -p $out/bin
      cp ${pkgs.sherlock-launcher}/bin/sherlock $out/bin/sherlock-launcher
    ''
  );
  sherlock-clp = pkgs.rustPlatform.buildRustPackage {
    pname = "sherlock-clp";
    version = "0.1.0";
    src = pkgs.fetchFromGitHub {
      owner = "Skxxtz";
      repo = "sherlock-clipboard";
      rev = "234f9bbfe84ed20ff938bbdafc0c5481a68968e";
      hash = "sha256-wrjlA/XUxgrn6gICB0ualZg3oX5YEd8HGchBq9/mnz0=";
    };

    cargoHash = "sha256-D2/L7vQkjEgawde9cZH45s0FSLluihqYSSwW5eLNMxM=";
  };
in
{
  config = lib.mkIf osConfig.hyprland.enable {
    home.file = {
      ".config/hypr" = {
        source = link "${config.home.homeDirectory}/.dotfiles/configs/hypr";
        recursive = true;
      };
    };

    home.packages = [ sherlock-clp ];

    programs.sherlock = {
      enable = true;

      # If wanted, you can use this line for the _latest_ package. / Otherwise, you're relying on nixpkgs to update it frequently enough.
      # For this to work, make sure to add sherlock as a flake input!
      # package = inputs.sherlock.packages.${pkgs.system}.default;
      package = sherlock-launcher;

      # config.toml
      settings = {
        units.currency = "usd";

        appearance = {
          icon_size = 24;
          width = 1080;
          height = 720;
        };
      };

      # sherlock_alias.json
      aliases = {
        vesktop = {
          name = "Discord";
        };
      };

      # sherlockignore
      ignore = ''
        Avahi*
      '';

      # fallback.json
      launchers = [
        {
          name = "App Launcher";
          type = "app_launcher";
          args = { };
          priority = 1;
          home = "Home";
        }
        {
          name = "Web Search";
          display_name = "Google Search";
          tag_start = "{keyword}";
          tag_end = "{keyword}";
          alias = "gg";
          type = "web_launcher";
          args = {
            search_engine = "google";
            icon = "google";
          };
          priority = 2;
        }
        {
          name = "Calculator";
          type = "calculation";
          alias = "=";
          args = {
            capabilities = [
              "calc.math"
              "calc.units"
            ];
          };
          priority = 0;
        }
        {
          name = "Clipboard";
          type = "clipboard-execution";
          alias = "ch";
          args = {
            "capabilities" = [
              "url"
              "colors.all"
              "calc.math"
              "calc.units"
            ];
          };
          priority = 0;
          home = "Home";
        }
        {
          name = "Emoji Picker";
          type = "emoji_picker";
          alias = "=)";
          args = {
            default_skin_tone = "Dark";
          };
          priority = 0;
          home = "Search";
        }
        {
          name = "Kill Process";
          alias = "kill";
          type = "process";
          args = { };
          priority = 0;
          home = "Search";
        }
      ];

      # main.css
      style = # css
        ''
          * {
            font-family: sans-serif;
          }

          :root {
            
          }
        '';
    };
  };
}
