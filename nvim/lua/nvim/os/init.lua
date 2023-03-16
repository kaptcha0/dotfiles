if vim.fn.has('win32') or vim.fn.has('win32unix') then
  require('nvim.os.windows')
else
  require('nvim.os.unix')
end
