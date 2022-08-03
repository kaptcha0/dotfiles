local M = {}

local lsp = require('lsp')
local utils = require('utils')

local mason = import('mason')
-- local installer = import('mason-lspconfig')
local installer = import('mason-tool-installer')

if not mason or not installer then
  return
end

function M.setup()
  local tools = utils.merge(lsp.servers, lsp.linters, lsp.debuggers, lsp.formatters)

  mason.setup({
    log_level = vim.log.levels.DEBUG,
  })
  installer.setup({
    ensure_installed = tools,
  })
end

return M
