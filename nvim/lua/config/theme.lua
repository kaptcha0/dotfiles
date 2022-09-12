local M = {}

function M.setup(opts, colorscheme)
  vim.g.lualine_theme = opts[1]
  opts[1] = nil

  for key, value in pairs(opts) do
    vim.g[key] = value
  end

  vim.cmd("colorscheme " .. (colorscheme or vim.g.lualine_theme))
end

return M
