local barbar = import('bufferline')

if not barbar then
  return
end

barbar.setup({
  -- Excludes buffers from the tabline
  exclude_ft = {},
  exclude_name = {},

  -- Configure icons on the bufferline.
  icon_separator_active = '▎',
  icon_separator_inactive = '▎',
  icon_close_tab = '',
  icon_close_tab_modified = '●',
  icon_pinned = '',
})
