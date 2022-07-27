local lsp = require('lsp')
local utils = require('utils')

local mason = utils.get_package('mason')
-- local installer = utils.get_package('mason-lspconfig')
local installer = utils.get_package('mason-tool-installer')

if not mason or not installer then
  return
end

local tools = utils.merge(lsp.servers, lsp.linters, lsp.debuggers, lsp.formatters)

mason.setup()
installer.setup({
  ensure_installed = tools,
  -- automatic_installation = true
  -- auto_update = true
})
