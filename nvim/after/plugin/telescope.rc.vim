nnoremap <silent> ;f <cmd>Telescope find_files<CR>
nnoremap <silent> ;r <cmd>Telescope live_grep<CR>
nnoremap <silent> \\ <cmd>Telescope buffers<CR>
nnoremap <silent> ;; <cmd>Telescope help_tags<CR>

lua << EOF
local actions = import('telescope.actions')
local telescope = import('telescope')

if not actions or not telescope then
  return
end

telescope.setup {
  defaults = {
    mappings = {
      n = {
        ['q'] = actions.close,
      },
    },
  },
}
EOF
