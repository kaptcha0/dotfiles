vim.o.clipboard = vim.o.clipboard .. 'unnamedplus'
vim.o.fileformat = 'unix'
vim.o.fileformats = 'unix,dos'

-- Save with root permission --
vim.api.nvim_create_user_command('W', function(opts)
  vim.cmd([[ w !sudo -A tee > /dev/null % ]])
end, {})
