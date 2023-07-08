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

---@param name string
---@param msg string
---@param hl string
function M.log(name, msg, hl)
  name = name or 'Neovim'
  hl = hl or 'Todo'
  vim.api.nvim_echo({ { '[' .. name .. '] ', hl }, { msg } }, true, {})
end

---@param name string
---@param msg string
function M.warn(name, msg)
  vim.notify('[' .. name .. '] ' .. msg, M.verbosity.warn, { title = name })
end

---@param name string
---@param msg string
function M.error(name, msg)
  vim.notify('[' .. name .. '] ' .. msg, M.verbosity.error, { title = name })
end

---@param name string
---@param msg string
function M.info(name, msg)
  vim.notify('[' .. name .. '] ' .. msg, M.verbosity.info, { title = name })
end

return M
