{
  config,
  pkgs,
  lib,
  inputs,
  ...
}:

let
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
  colors = config.lib.stylix.colors;
  hypr-plugins = inputs.hyprland-plugins.packages.${pkgs.stdenv.hostPlatform.system};
in
{
  options = {
    hyprland.enable = lib.mkEnableOption "enable hyprland";
  };

  config = lib.mkIf config.hyprland.enable {
    wayland.windowManager.hyprland = {
      enable = true;
      # set the flake package
      package = null;
      portalPackage = null;
      extraConfig = builtins.readFile (inputs.self + /configs/hypr/hyprland.conf);

      plugins = [
        hypr-plugins.hyprexpo
        hypr-plugins.hyprscrolling
      ];
    };

    services.network-manager-applet = {
      enable = true;
      package = (config.lib.nixGL.wrap pkgs.networkmanagerapplet);
    };

    services.blueman-applet = {
      enable = true;
      package = (config.lib.nixGL.wrap pkgs.blueman);
    };

    programs.hyprlock = {
      enable = true;
      package = (config.lib.nixGL.wrap pkgs.hyprlock);
      extraConfig = builtins.readFile (inputs.self + /configs/hypr/hyprlock.conf);
    };

    services.hyprpaper = {
      enable = true;
      settings = {};
    };

    services.hyprsunset = {
      enable = true;
      settings = {
        max-gamma = 150;

        profile = [
          {
            time = "7:30";
            identity = true;
          }
          {
            time = "18:00";
            temperature = 3100;
            gamma = 0.8;
          }
          {
            time = "21:00";
            temperature = 5000;
            gamma = 0.8;
          }
        ];
      };
    };

    home.sessionVariables = {
      NIXOS_OZONE_WL = "1";
      XDG_SESSION_TYPE = "wayland";
      # QT_QPA_PLATFORM = "wayland";
    };

    home.packages = with pkgs; [
      (config.lib.nixGL.wrap sherlock-clp)
      (config.lib.nixGL.wrap quickshell)

      # notifs
      (config.lib.nixGL.wrap hyprnotify)
      libnotify
      # utilities
      # (config.lib.nixGL.wrap networkmanagerapplet)
      # (config.lib.nixGL.wrap blueman)
      (config.lib.nixGL.wrap kdePackages.kdeconnect-kde)
      # kdePackages.bluedevil
      # kdePackages.kservice

      xdg-utils
      shared-mime-info
      mime-types
      desktop-file-utils

      hyprland-qtutils
      hyprpolkitagent
      hypridle
      hyprshot

      udiskie
      brightnessctl
      playerctl

      wl-clipboard
      cliphist
      (config.lib.nixGL.wrap pasystray)
      (config.lib.nixGL.wrap pavucontrol)
      (config.lib.nixGL.wrap easyeffects)

      (config.lib.nixGL.wrap nwg-displays)
      # (config.lib.nixGL.wrap nwg-clipman)
      (config.lib.nixGL.wrap swappy)
      # (config.lib.nixGL.wrap nwg-icon-picker)
    ];

    services.swaync = {
      enable = true;
      package = (config.lib.nixGL.wrap pkgs.swaynotificationcenter);
      # package = pkgs.emptyDirectory;
      style = # css
        ''
          :root {
            --border-radius: 8px;
            --notification-shadow: none,
          }
        '';
    };

    programs.sherlock = {
      enable = true;

      # If wanted, you can use this line for the _latest_ package. / Otherwise, you're relying on nixpkgs to update it frequently enough.
      # For this to work, make sure to add sherlock as a flake input!
      # package = inputs.sherlock.packages.${pkgs.system}.default;
      package = (config.lib.nixGL.wrap sherlock-launcher);
      # package = null;

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
            --background: ${"#" + colors.base00};
            --foreground: ${"#" + colors.base01};
            --text: ${"#" + colors.base05};
            --border: ${"#" + colors.base01};

            --tag-background: ${"#" + colors.base02};
            --tag-color: ${"#" + colors.base04};
            --error: ${"#" + colors.base08};
            --warning: ${"#" + colors.base0A};
            --success: ${"#" + colors.base0B};
          }

          window:not(#backdrop),
          #shortcut-holder,
          .calc-tile,
          #mpris-icon-holder,
          gridview child box,
          #context-menu,
          #context-menu row {
            border-radius: 8px;
          }

          .tag,
          .status-bar #shortcut-key,
          .status-bar #shortcut-modifier {
            border-radius: 4px;
          }
        '';
    };
  };
}
