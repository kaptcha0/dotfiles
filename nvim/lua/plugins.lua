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
      use 'voldikss/vim-floaterm'
      use 'EdenEast/nightfox.nvim'
      use 'sbdchd/neoformat'
      use 'b0o/schemastore.nvim'
      use {
        'weilbith/nvim-code-action-menu',
        cmd = 'CodeActionMenu',
      }

      -- LSP --
      use {
        'tami5/lspsaga.nvim',
        'onsails/lspkind.nvim',
        {
          'onsails/diaglist.nvim',
          config = function()
            require('diaglist').init {}
          end
        },
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
            'petertriho/cmp-git',
            {
              'KadoBOT/cmp-plugins',
              config = function()
                require('cmp-plugins').setup {
                  files = { 'lua/plugins.lua' }
                }
              end
            }
          }
        },
        setup = function()
          require('nvim-lsp-installer').setup {}
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
