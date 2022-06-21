vim.cmd [[packadd packer.nvim]]

local fn = vim.fn
local install_path = fn.stdpath('data') .. '/site/pack/packer/start/packer.nvim'
if fn.empty(fn.glob(install_path)) > 0 then
  packer_bootstrap = fn.system({ 'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim',
    install_path })
end

return require("packer").startup(
  function(use)
    use 'wbthomason/packer.nvim'

    use 'tpope/vim-fugitive'
    use 'tpope/vim-rhubarb'
    use 'cohama/lexima.vim'

    if fn.has('nvim') == 1 then
      -- Editor --
      use {
        'prettier/vim-prettier',
        run = 'yarn install --frozen-lockfile --production'
      }

      -- LSP --
      use {
        'tami5/lspsaga.nvim',
        'onsails/lspkind.nvim',
        'williamboman/nvim-lsp-installer',
        'neovim/nvim-lspconfig',
        {
          'hrsh7th/nvim-cmp',
          requires = {
            'hrsh7th/cmp-nvim-lsp',
            'hrsh7th/cmp-buffer',
            'hrsh7th/cmp-path',
            'hrsh7th/cmp-cmdline',
            'L3MON4D3/LuaSnip',
            'hrsh7th/cmp-nvim-lua',
            'Saecki/crates.nvim',
            'David-Kunz/cmp-npm',
          }
        },
        setup = function()
          require('nvim-lsp-installer').setup {}
        end
      }

      -- Terminal
      use {
        "akinsho/toggleterm.nvim",
        tag = 'v1.*',
        config = function()
          require("toggleterm").setup {
            shell = (vim.fn.has('win32') or vim.fn.has('win32unix')) and 'pwsh' or 'bash'
          }
        end
      }

      -- Asthetics
      use 'hoob3rt/lualine.nvim'
      use 'kyazdani42/nvim-web-devicons'
      use {
        'nvim-treesitter/nvim-treesitter',
        run = ':TSUpdate'
      }

      -- File search
      use 'kyazdani42/nvim-tree.lua'
      use {
        'nvim-telescope/telescope.nvim',
        requires = {
          'nvim-lua/popup.nvim',
          'nvim-lua/plenary.nvim',
        }
      }
    end

    if packer_bootstrap then
      require('packer').sync()
    end
  end
)
