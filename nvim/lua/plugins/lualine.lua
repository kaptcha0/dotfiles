local lualine = import('lualine')

if not lualine then
  return
end

lualine.setup({
  options = {
    theme = 'onedark' or (vim.g.lualine_theme or 'auto'),
    icons_enabled = true,
    section_separators = { left = '', right = '' },
    component_separators = '|',
    disabled_filetypes = {},
  },
  sections = {
    lualine_a = {
      { 'mode', separator = { left = '' }, right_padding = 2 },
    },
    lualine_b = { 'branch', { 'filename', path = 1 } },
    lualine_c = {},
    lualine_x = {
      {
        'diagnostics',
        sources = { 'nvim_diagnostic' },
        symbols = { error = ' ', warn = ' ', info = ' ', hint = ' ' },
      },
      'fileformat',
      'encoding',
      'filetype',
    },
    lualine_y = {},
    lualine_z = {
      'progress',
      { 'location', separator = { right = '' }, left_padding = 2 },
    },
  },
  inactive_sections = {
    lualine_a = {},
    lualine_b = {},
    lualine_c = {
      {
        'filename',
        path = 1, -- 0 = just filename, 1 = relative path, 2 = absolute path
      },
    },
    lualine_x = {},
    lualine_y = {},
    lualine_z = {},
  },
  tabline = {},
  extensions = { 'fugitive' },
})
