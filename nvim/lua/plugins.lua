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
    use({ 'rcarriga/cmp-dap', after = 'nvim-dap' })
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
    use('simrat39/symbols-outline.nvim')

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

    use({
      'iamcco/markdown-preview.nvim',
      run = 'cd app && npm install',
      setup = function()
        vim.g.mkdp_filetypes = { 'markdown' }
      end,
      ft = { 'markdown' },
    })

    -- Debugger --
    use('rcarriga/nvim-dap-ui')
    use('mfussenegger/nvim-dap-python')
    use('jbyuki/one-small-step-for-vimkind')
    use({ 'simrat39/rust-tools.nvim', after = 'nvim-lspconfig' })

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
        require('plugins.nvim-dap').setup()
      end,
    })
    --
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
      config = function()
        -- require('plugins.tabby')
      end,
    })

    use({
      'freddiehaddad/feline.nvim',
      after = 'kanagawa.nvim',
      config = function()
        require('plugins.feline')
      end,
    })

    -- Theme --
    use({
      'rebelot/kanagawa.nvim',
      config = function()
        require('plugins.kanagawa')
      end,
    })

    if packer_bootstrap then
      require('packer').sync()
    end
  end,
  config = packer_config,
})
