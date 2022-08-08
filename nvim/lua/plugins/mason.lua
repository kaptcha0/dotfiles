local lsp = require('config.lsp_servers')
local utils = require('utils')

local mason = require('mason')
local installer = require('mason-tool-installer')

local tools = utils.merge(lsp.servers, lsp.linters, lsp.debuggers, lsp.formatters)

mason.setup({
  log_level = vim.log.levels.DEBUG,
})

installer.setup({
  ensure_installed = tools,
})
