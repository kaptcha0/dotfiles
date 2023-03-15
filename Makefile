./gnome/extensions.txt:
	@echo "GNOME EXTENSIONS"
	@echo "================"
	
	@echo "Backing up gnome-extensions"
	gnome-extensions list --enabled > ./gnome/extensions.txt
	
	@echo ""

Brewfile:
	@echo "HOMEBREW"
	@echo "========"
	
	@echo "Updating homebrew"
	brew upgrade --fetch-HEAD
	
	@echo "Backing up brew"
	brew bundle dump --force
	
	@echo ""

backup: ./gnome/extensions.txt ./Brewfile
	@echo "Everything is backed up"

clean:
	rm -f ./Brewfile ./gnome/extensions.txt
