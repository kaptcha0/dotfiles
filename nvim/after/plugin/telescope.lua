local actions = import('telescope.actions')
local telescope = import('telescope')

if not actions or not telescope then
  return
end

map('n', ';b', '<cmd>Telescope buffers<cr>', { silent = true })
map('n', ';f', '<cmd>Telescope find_files<cr>', { silent = true })
map('n', ';h', '<cmd>Telescope help_tags<cr>', { silent = true })
map('n', ';r', '<cmd>Telescope live_grep<cr>', { silent = true })
map('n', '<leader>ca', vim.lsp.buf.code_action, { silent = true })
map('v', '<leader>rr', telescope.extensions.refactoring.refactors, { silent = true })

telescope.setup({
  defaults = {
    layout_strategy = 'flex',
    layout_config = {
      prompt_position = 'top',
    },
    mappings = {
      n = {
        ['q'] = actions.close,
      },
      i = {
        ['C-q'] = actions.close,
      },
    },
    prompt_prefix = '⠕ ',
    selection_caret = ' '
  },
  extensions = {
    ['ui-select'] = {
      require('telescope.themes').get_cursor(),
    },
  },
})

telescope.load_extension("refactoring")
telescope.load_extension('ui-select')
