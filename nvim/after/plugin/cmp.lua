local utils = require('utils')
local config = require('config.cmp')
local icons = require('config.lsp_icons')

local cmp = import('cmp')
local lspkind = import('lspkind')

if not cmp or not lspkind then
  return
end

vim.api.nvim_set_option('completeopt', 'menuone,noinsert,noselect')
config.set_groups()

cmp.setup({
  snippet = {
    expand = function(args)
      local luasnip = import('luasnip', utils.verbosity.none)

      if not luasnip then
        utils.warn('cmp setup (snippet.expand)', 'disabling luasnip snippets as they are not found')
      end

      luasnip.lsp_expand(args.body)
    end,
  },
  mapping = cmp.mapping.preset.insert({
    ['<C-b>'] = cmp.mapping.scroll_docs(-4),
    ['<C-f>'] = cmp.mapping.scroll_docs(4),
    ['<C-Space>'] = cmp.mapping.complete(),
    ['<C-e>'] = cmp.mapping.abort(),
    ['<CR>'] = cmp.mapping.confirm({ select = false }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
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
    { name = 'plugins' },
  },
  window = {
    completion = {
      winhighlight = 'Normal:Pmenu,FloatBorder:Pmenu,Search:None',
      col_offset = -3,
      side_padding = 0,
    },
  },

  formatting = {
    fields = { 'kind', 'abbr', 'menu' },
    format = function(entry, vim_item)
      local kind = lspkind.cmp_format({ mode = 'symbol', symbol_map = icons, maxwidth = 50 })(entry, vim_item)
      local strings = vim.split(kind.kind, '%s', { trimempty = true })
      kind.kind = ' ' .. strings[1] .. ' '

      return kind
    end,
  },
})

-- Enable completion for gitcommit files
cmp.setup.filetype('gitcommit', {
  sources = cmp.config.sources({
    { name = 'cmp_git' },
  }, {
    { name = 'buffer' },
  }),
})

-- Enable completion for the nvim-dap
cmp.setup.filetype({ 'dap-repl', 'dapui_watches' }, {
  sources = {
    { name = 'dap' },
  },
})

-- Use buffer source for `/` (if you enabled `native_menu`, this won't work anymore).
cmp.setup.cmdline('/', {
  mapping = cmp.mapping.preset.cmdline(),
  sources = {
    { name = 'buffer' },
  },
})

-- Use cmdline & path source for ':' (if you enabled `native_menu`, this won't work anymore).
cmp.setup.cmdline(':', {
  mapping = cmp.mapping.preset.cmdline(),
  sources = cmp.config.sources({
    { name = 'path' },
  }, {
    { name = 'cmdline' },
  }),
})

vim.cmd([[highlight! default link CmpItemKind CmpItemMenuDefault]])
