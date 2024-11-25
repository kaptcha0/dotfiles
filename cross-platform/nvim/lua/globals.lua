local uname = vim.loop.os_uname()
local utils = require('utils')

_G.OS = uname.sysname
_G.IS_MAC = OS == 'Darwin'
_G.IS_LINUX = OS == 'Linux'
_G.IS_WINDOWS = OS:find('Windows') and true or false
_G.IS_WSL = (IS_LINUX and uname.release:find('Microsoft')) and true or false

-- Turns table to string
---@param ... table[]
_G.dump = function(...)
  return vim.inspect(...)
end

-- Imports module if available and returns it
---@alias Verbosity `utils.verbosity`
---@param name string
---@param verbosity Verbosity?
---@return table|nil
_G.import = function(name, verbosity)
  local fns = {
    [utils.verbosity.none] = function(...) end,
    [utils.verbosity.info] = utils.info,
    [utils.verbosity.warn] = utils.warn,
    [utils.verbosity.error] = utils.error,
  }

  local fn = verbosity and (fns[verbosity] or fns[utils.verbosity.none]) or fns[utils.verbosity.warn]

  local status, package = pcall(require, name)

  if not status then
    fn(name .. ' setup', name .. ' not installed or loaded')
    return nil
  end

  return package
end

-- Sets neovim keybindings
---@param mode string
---@param lhs string
---@param rhs string|function
---@param opts table?
function _G.map(mode, lhs, rhs, opts)
  local options = { noremap = true }
  if opts then
    options = vim.tbl_extend('force', options, opts)
  end

  vim.keymap.set(mode, lhs, rhs, opts)
end
