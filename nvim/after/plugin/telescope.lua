local actions = import('telescope.actions')
local telescope = import('telescope')

if not actions or not telescope then
  return
end

map('n', ';b', '<cmd>Telescope buffers<cr>', { silent = true })
map('n', ';f', '<cmd>Telescope find_files<cr>', { silent = true })
map('n', ';h', '<cmd>Telescope help_tags<cr>', { silent = true })
map('n', ';r', '<cmd>Telescope live_grep<cr>', { silent = true })

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
  },
  extensions = {
    ['ui-select'] = {
      require('telescope.themes').get_dropdown(),
    },
  },
})

telescope.load_extension('ui-select')
