vim.cmd([[packadd packer.nvim]])

local fn = vim.fn
local install_path = fn.stdpath('data') .. '/site/pack/packer/start/packer.nvim'

if fn.empty(fn.glob(install_path)) > 0 then
  packer_bootstrap = fn.system({
    'git',
    'clone',
    '--depth',
    '1',
    'https://github.com/wbthomason/packer.nvim',
    install_path,
  })
end

return require('packer').startup(function(use)
  use('wbthomason/packer.nvim')

  -- Common Dependencies --
  use('tpope/vim-fugitive')
  use('tpope/vim-rhubarb')
  use('cohama/lexima.vim')
  use('nvim-lua/popup.nvim')
  use('nvim-lua/plenary.nvim')

  -- Theme --
  use({
    'navarasu/onedark.nvim',
    config = function()
      require('onedark').load({
        style = 'darker',
      })
    end,
  })

  -- Editor --
  use('voldikss/vim-floaterm')
  use('b0o/schemastore.nvim')

  use({
    'nvim-treesitter/nvim-treesitter',
    run = ':TSUpdate',
  })

  use({
    'numToStr/Comment.nvim',
    config = function()
      require('Comment').setup()
    end,
  })

  use({
    'folke/todo-comments.nvim',
    config = function()
      require('todo-comments').setup()
    end,
  })

  use({
    'folke/trouble.nvim',
    config = function()
      require('trouble').setup()
    end,
  })

  -- Debugger
  use('rcarriga/nvim-dap-ui')
  use('mfussenegger/nvim-dap-python')
  use('simrat39/rust-tools.nvim')

  use({
    'mxsdev/nvim-dap-vscode-js',
    requires = {
      'microsoft/vscode-js-debug',
      opt = true,
      run = 'npm install --legacy-peer-deps && npm run compile',
    },
  })

  use({
    'mfussenegger/nvim-dap',
    after = { 'nvim-dap-python', 'rust-tools.nvim', 'nvim-dap-ui', 'nvim-dap-vscode-js' },
    config = function()
      require('config.nvim-dap').setup()
    end,
  })

  -- Asthetics
  use('folke/lsp-colors.nvim')
  use('hoob3rt/lualine.nvim')
  use('romgrk/barbar.nvim')
  use('kyazdani42/nvim-web-devicons')

  -- Files
  use('kyazdani42/nvim-tree.lua')
  use('nvim-telescope/telescope.nvim')
  use('nvim-telescope/telescope-ui-select.nvim')

  -- LSP --
  use('neovim/nvim-lspconfig')
  use('tami5/lspsaga.nvim')
  use('onsails/lspkind.nvim')

  use('williamboman/mason.nvim')
  use('WhoIsSethDaniel/mason-tool-installer.nvim')

  use('jose-elias-alvarez/null-ls.nvim')

  use('hrsh7th/nvim-cmp')
  use('hrsh7th/cmp-nvim-lsp')
  use('hrsh7th/cmp-buffer')
  use('hrsh7th/cmp-path')
  use('hrsh7th/cmp-cmdline')
  use('hrsh7th/cmp-nvim-lua')
  use('David-Kunz/cmp-npm')
  use('petertriho/cmp-git')
  use('rcarriga/cmp-dap')
  use('L3MON4D3/LuaSnip')
  use('Saecki/crates.nvim')

  use({
    'KadoBOT/cmp-plugins',
    config = function()
      require('cmp-plugins').setup({
        files = { 'lua/plugins.lua' },
      })
    end,
  })

  if packer_bootstrap then
    require('packer').sync()
  end
end)
