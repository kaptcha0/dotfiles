extensions:
	@echo "Backing up gnome-extensions"
	gnome-extensions list --enabled > ./gnome/extensions.txt

backup: extensions
	@echo "Everything is backed up"
