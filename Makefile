./gnome/extensions:
	@echo "GNOME EXTENSIONS"
	@echo "================"
	
	mkdir -p $@
	
	@echo "Backing up actual extensions"
	rsync -av --exclude='**/*cache*' ~/.local/share/gnome-shell/extensions ./gnome/extensions
	# cp -vr ~/.local/share/gnome-shell/extensions/ ./gnome/extensions
	@echo ""
	
	@echo "Saving enabled extension list to file"
	gnome-extensions list --enabled > ./gnome/extensions/extensions.txt
	
	@echo ""

./gnome/gradience:
	mkdir -p $@
	@echo "GRADIENCE PRESETS"
	@echo "================"
	@echo "Copying files"
	cp -vr ~/.var/app/com.github.GradienceTeam.Gradience/config/presets/ ./gnome/gradience
	
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

backup: ./gnome/gradience ./gnome/extensions ./brew/
	@echo "$^ updated"

to_unix:
	dos2unix ./**/*

clean:
	rm -rf ./brew/ ./gnome/
