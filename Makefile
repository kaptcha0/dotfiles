./gnome/:
	@echo "GNOME EXTENSIONS"
	@echo "================"
	
	@echo "Backing up actual extensions"
	cp -vr ~/.local/share/gnome-shell/extensions/ ./gnome
	@echo ""
	
	@echo "Saving enabled extension list to file"
	gnome-extensions list --enabled > ./gnome/extensions.txt
	
	@echo ""

./brew/:
	@echo "HOMEBREW"
	@echo "========"
	
	@echo "Updating homebrew"
	brew upgrade --fetch-HEAD
	@echo ""
	
	@echo "Backing up brew"
	mkdir -p $@
	cd $@ && brew bundle dump --force --describe
	
	@echo ""

backup: ./gnome/ ./brew/
	@echo "$^ updated"

clean:
	rm -rf ./brew/ ./gnome/
