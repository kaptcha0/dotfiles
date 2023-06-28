local ensure_packer = function()
  local fn = vim.fn
  local install_path = fn.stdpath('data') .. '/site/pack/packer/start/packer.nvim'
  if fn.empty(fn.glob(install_path)) > 0 then
    fn.system({ 'git', 'clone', '--depth', '1', 'https://github.com/wbthomason/packer.nvim', install_path })
    vim.cmd([[packadd packer.nvim]])
    return true
  end
  return false
end

local packer_bootstrap = ensure_packer()

local packer_config = {
  display = {
    open_fn = function()
      return require('packer.util').float({ border = 'single' })
    end,
  },
}
return require('packer').startup({
  function(use)
    use('wbthomason/packer.nvim')

    -- Common Dependencies --
    use('tpope/vim-fugitive')
    use('tpope/vim-rhubarb')
    use('cohama/lexima.vim')
    use('nvim-lua/popup.nvim')
    use('nvim-lua/plenary.nvim')

    -- LSP --
    use('WhoIsSethDaniel/mason-tool-installer.nvim')
    use({
      'williamboman/mason.nvim',
      config = function()
        require('plugins.mason')
      end,
    })

    use('tami5/lspsaga.nvim')
    use('onsails/lspkind.nvim')

    use({
      'neovim/nvim-lspconfig',
      event = 'VimEnter',
      after = 'cmp-nvim-lsp',
      config = function()
        require('plugins.lspconfig').setup()
      end,
    })

    use({
      'jose-elias-alvarez/null-ls.nvim',
      after = 'mason.nvim',
      config = function()
        require('plugins.null-ls')
      end,
    })

    use({ 'hrsh7th/cmp-nvim-lsp', after = 'nvim-cmp' })
    use('hrsh7th/cmp-buffer')
    use('hrsh7th/cmp-path')
    use('hrsh7th/cmp-cmdline')
    use('hrsh7th/cmp-nvim-lua')
    use('David-Kunz/cmp-npm')
    use('petertriho/cmp-git')
    use('L3MON4D3/LuaSnip')
    use('Saecki/crates.nvim')

    use({
      'hrsh7th/nvim-cmp',
      config = function()
        require('plugins.cmp').setup()
      end,
    })

    use({
      'KadoBOT/cmp-plugins',
      config = function()
        require('cmp-plugins').setup({
          files = { 'lua/plugins.lua' },
        })
      end,
    })

    use({
      'ThePrimeagen/refactoring.nvim',
      config = function()
        require('refactoring').setup({})
      end,
    })

    -- Editor --
    use('voldikss/vim-floaterm')
    use('b0o/schemastore.nvim')
    use({
      'simrat39/symbols-outline.nvim',
      config = function()
        require('symbols-outline').setup()
      end,
    })

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

    -- Files --
    use('kyazdani42/nvim-tree.lua')
    use('nvim-telescope/telescope.nvim')
    use('nvim-telescope/telescope-ui-select.nvim')
    use('lewis6991/gitsigns.nvim')

    -- Asthetics --
    use('folke/lsp-colors.nvim')
    use('kyazdani42/nvim-web-devicons')
    use('SmiteshP/nvim-navic')

    use({
      'nanozuki/tabby.nvim',
      after = 'catppuccin',
      config = function()
        require('plugins.tabby')
      end,
    })

    use({
      'freddiehaddad/feline.nvim',
      after = 'catppuccin',
      config = function()
        require('plugins.feline')
      end,
    })

    use({
      'catppuccin/nvim',
      as = 'catppuccin',
      config = function()
        require('plugins.catppuccin')
      end,
    })

    if packer_bootstrap then
      require('packer').sync()
    end
  end,
  config = packer_config,
})
