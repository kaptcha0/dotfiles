local uname = vim.loop.os_uname()

_G.OS = uname.sysname
_G.IS_MAC = OS == 'Darwin'
_G.IS_LINUX = OS == 'Linux'
_G.IS_WINDOWS = OS:find('Windows') and true or false
_G.IS_WSL = (IS_LINUX and uname.release:find('Microsoft')) and true or false

-- Turns table to string
_G.dump = function(...)
  return vim.inspect(...)
end

-- @param name string
-- @param verbosity `M.verbosity`
--  utils.verbosity.warn is the default
-- @return loaded plugin or nil
_G.import = function (name, verbosity)
  local utils = require('utils')

  local fns = {
    [utils.verbosity.none] = function(...) end,
    [utils.verbosity.info] = utils.info,
    [utils.verbosity.warn] = utils.warn,
    [utils.verbosity.error] = utils.error
  }

  local fn = verbosity and (
    fns[verbosity] or fns[utils.verbosity.none]
  ) or fns[utils.verbosity.warn]

  local status, package = pcall(require, name)

  if not status then
    fn(name .. " not installed or loaded", name .. " setup")
    return nil
  end

  return package
end

