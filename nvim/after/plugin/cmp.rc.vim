if !exists('g:loaded_cmp') | finish | endif

set completeopt=menuone,noinsert,noselect

lua << EOF
  local cmp = require 'cmp'
  local lspkind = require 'lspkind'

  cmp.setup({
    snippet = {
      expand = function(args)
        require('luasnip').lsp_expand(args.body)
      end
    },
    mapping = cmp.mapping.preset.insert({
      ['<C-b>'] = cmp.mapping.scroll_docs(-4),
      ['<C-f>'] = cmp.mapping.scroll_docs(4),
      ['<C-Space>'] = cmp.mapping.complete(),
      ['<C-e>'] = cmp.mapping.abort(),
      ['<CR>'] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
    }),
    sources = {
      { name = 'nvim_lsp' },
      { name = 'path' },
      { name = 'buffer' },
      { name = 'nvim_lua' },
      { name = 'crates' },
      { name = 'npm' },
      { name = 'cmdline' },
      { name = 'git' },
      { name = 'plugins' }
    },
    formatting = {
      format = lspkind.cmp_format({ mode = 'symbol_text', preset = 'codicons', maxwidth = 50 })
    }
  })

  cmp.setup.filetype('gitcommit', {
    sources = cmp.config.sources({
      {name = 'cmp_git'}
    }, {
        { name = 'buffer' }
    })
  })

  -- Use buffer source for `/` (if you enabled `native_menu`, this won't work anymore).
  cmp.setup.cmdline('/', {
    mapping = cmp.mapping.preset.cmdline(),
    sources = {
      { name = 'buffer' }
    }
  })

  -- Use cmdline & path source for ':' (if you enabled `native_menu`, this won't work anymore).
  cmp.setup.cmdline(':', {
    mapping = cmp.mapping.preset.cmdline(),
    sources = cmp.config.sources({
      { name = 'path' }
    }, {
      { name = 'cmdline' }
    })
  })

  vim.cmd [[highlight! default link CmpItemKind CmpItemMenuDefault]]
EOF