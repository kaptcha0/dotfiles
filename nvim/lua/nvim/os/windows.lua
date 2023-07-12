vim.o.clipboard = 'unnamed,unnamedplus'
vim.o.fileformat = 'dos'
vim.o.fileformats = 'dos,unix'

-- Save with root permission --
vim.api.nvim_create_user_command('W', function(opts)
  vim.cmd([[ w! ]])
end, {})
