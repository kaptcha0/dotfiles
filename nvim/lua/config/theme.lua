local M = {}

function M.setup(opts)
  local colorscheme = opts[1]
  opts[1] = 0

  for key, value in pairs(opts) do
    vim.g[key] = value
  end

  vim.cmd('colorscheme ' .. colorscheme)
end

return M
