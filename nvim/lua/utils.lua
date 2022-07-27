_G.dump = function(...)
  print(vim.inspect(...))
end

_G.prequire = function(...)
  local status, lib = pcall(require, ...)
  if status then
    return lib
  end
  return nil
end

local M = {}

M.verbosity = {
  info = vim.log.levels.INFO,
  warn = vim.log.levels.WARN,
  error = vim.log.levels.ERROR,
  none = -1
}

function M.t(str)
  return vim.api.nvim_replace_termcodes(str, true, true, true)
end

function M.log(msg, hl, name)
  name = name or "Neovim"
  hl = hl or "Todo"
  vim.api.nvim_echo({ { name .. ": ", hl }, { msg } }, true, {})
end

function M.warn(msg, name)
  vim.notify(msg, M.verbosity.warn, { title = name })
end

function M.error(msg, name)
  vim.notify(msg, M.verbosity.error, { title = name })
end

function M.info(msg, name)
  vim.notify(msg, M.verbosity.info, { title = name })
end

-- @param name string
-- @param verbosity `M.verbosity`
--  M.verbosity.warn is the default
-- @return loaded plugin or nil
function M.get_package(name, verbosity)
  local fns = {
    [M.verbosity.none] = function(...) end,
    [M.verbosity.info] = M.info,
    [M.verbosity.warn] = M.warn,
    [M.verbosity.error] = M.error
  }

  local fn = verbosity and (
    fns[verbosity] or fns[M.verbosity.none]
  ) or fns[M.verbosity.warn]

  local status, package = pcall(require, name)

  if not status then
    fn(name .. " not installed or loaded", name .. " setup")
    return nil 
  end

  return package
end

function M.merge(...)
  local result = {}
  for _, t in ipairs{...} do
    for k, v in pairs(t) do
      result[k] = v
    end
    local mt = getmetatable(t)
    if mt then
      setmetatable(result, mt)
    end
  end
  return result
end

return M
