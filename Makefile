./gnome/extensions.txt:
	@echo "Backing up gnome-extensions"
	gnome-extensions list --enabled > ./gnome/extensions.txt

Brewfile:
	@echo "Updating"
	brew upgrade --fetch-HEAD
	@echo "Backing up brew"
	brew bundle dump --force

backup: ./gnome/extensions.txt ./Brewfile
	@echo "Everything is backed up"
