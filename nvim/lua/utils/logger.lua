-- Utilities
local M = {}

M.verbosity = {
  info = vim.log.levels.INFO,
  warn = vim.log.levels.WARN,
  error = vim.log.levels.ERROR,
  none = -1,
}

function M.t(str)
  return vim.api.nvim_replace_termcodes(str, true, true, true)
end

function M.log(msg, hl, name)
  name = name or 'Neovim'
  hl = hl or 'Todo'
  vim.api.nvim_echo({ { '[' .. name .. '] ', hl }, { msg } }, true, {})
end

function M.warn(msg, name)
  vim.notify('[' .. name .. '] ' .. msg, M.verbosity.warn, { title = name })
end

function M.error(msg, name)
  vim.notify('[' .. name .. '] ' .. msg, M.verbosity.error, { title = name })
end

function M.info(msg, name)
  vim.notify('[' .. name .. '] ' .. msg, M.verbosity.info, { title = name })
end

return M
