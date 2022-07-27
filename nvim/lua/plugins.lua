vim.cmd([[packadd packer.nvim]])

local fn = vim.fn
local install_path = fn.stdpath("data") .. "/site/pack/packer/start/packer.nvim"
if fn.empty(fn.glob(install_path)) > 0 then
	packer_bootstrap = fn.system({
		"git",
		"clone",
		"--depth",
		"1",
		"https://github.com/wbthomason/packer.nvim",
		install_path,
	})
end

return require("packer").startup(function(use)
	use("wbthomason/packer.nvim")

	use("tpope/vim-fugitive")
	use("tpope/vim-rhubarb")
	use("cohama/lexima.vim")

		-- Themes --
	use({
		"marko-cerovac/material.nvim",
		config = function()
      require("material").setup({
			contrast = {
				floating_windows = true,
				non_current_windows = true,
				cursor_line = true,
			},
			italics = {
				comments = false,
				keywords = false,
				functions = false,
				strings = false,
				variables = false,
			},
			lualine_style = "stealth",
		})
  end
	})

  -- Editor --
  use("voldikss/vim-floaterm")
  use("b0o/schemastore.nvim")
  use({
    "nvim-treesitter/nvim-treesitter",
    run = ":TSUpdate",
  })

  use({
    "Pocco81/dap-buddy.nvim",
    requires = "mfussenegger/nvim-dap",
  })

  use({
    "numToStr/Comment.nvim",
    config = function()
      require("Comment").setup()
    end,
  })

  use {
    "folke/todo-comments.nvim",
    config = function()
      require("todo-comments").setup()
    end
  }

  use {
    "folke/trouble.nvim",
    config = function()
      require("trouble").setup()
    end
  }

  -- Asthetics
  use 'folke/lsp-colors.nvim'
  use("hoob3rt/lualine.nvim")
  use("kyazdani42/nvim-web-devicons")

  -- File search
  use("kyazdani42/nvim-tree.lua")
  use({
    "nvim-telescope/telescope.nvim",
    requires = {
      "nvim-lua/popup.nvim",
      "nvim-lua/plenary.nvim",
    },
  })

  -- LSP --
  use({
    "tami5/lspsaga.nvim",
    "onsails/lspkind.nvim",
    { "neovim/nvim-lspconfig", after = "mason.nvim" },
    {
      "williamboman/mason.nvim",
      requires = {
        "WhoIsSethDaniel/mason-tool-installer.nvim",
        -- "williamboman/mason-lspconfig.nvim",
      }
    },
    {
      "hrsh7th/nvim-cmp",
      requires = {
        "hrsh7th/cmp-nvim-lsp",
        "hrsh7th/cmp-buffer",
        "hrsh7th/cmp-path",
        "hrsh7th/cmp-cmdline",
        "L3MON4D3/LuaSnip",
        "hrsh7th/cmp-nvim-lua",
        "Saecki/crates.nvim",
        "David-Kunz/cmp-npm",
        "petertriho/cmp-git",
        {
          "KadoBOT/cmp-plugins",
          config = function()
            require("cmp-plugins").setup({
              files = { "lua/plugins.lua" },
            })
          end,
        },
      },
    },
  })

	if packer_bootstrap then
		require("packer").sync()
	end
end)
