local actions = import('telescope.actions')
local telescope = import('telescope')

if not actions or not telescope then
  return
end

map('n', ';f', '<cmd>Telescope find_files<cr>', { silent = true })
map('n', ';r', '<cmd>Telescope live_grep<cr>', { silent = true })
map('n', '\\', '<cmd>Telescope buffers<cr>', { silent = true })
map('n', ';;', '<cmd>Telescope help_tags<cr>', { silent = true })

telescope.setup({
  defaults = {
    mappings = {
      n = {
        ['q'] = actions.close,
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
