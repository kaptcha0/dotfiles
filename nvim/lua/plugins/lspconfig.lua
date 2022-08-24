local M = {}
local protocol = require('vim.lsp.protocol')
local lsp = require('config.lsp_servers')
local server_configs = require('config.lsp_configs')
local icons = require('config.lsp_icons')

local lspconfig = require('lspconfig')
local cmp = import('cmp_nvim_lsp')

if not cmp then
  return
end

-- lspconfig setup --

-- Custom on_attach
local on_attach = function(client, bufnr)
  local function buf_set_keymap(...)
    vim.api.nvim_buf_set_keymap(bufnr, ...)
  end

  -- Mappings
  local opts = { noremap = true, silent = true }

  buf_set_keymap('n', 'gd', '<cmd>lua vim.lsp.buf.definition()<CR>', opts)
  buf_set_keymap('n', 'K', '<cmd>lua vim.lsp.buf.hover()<cr>', opts)

  protocol.CompletionItemKind = icons
end

-- Enable some language servers with the additional completion capabilities offered by nvim-cmp
function M.setup()
  local capabilities = cmp.update_capabilities(vim.lsp.protocol.make_client_capabilities())

  local default_config = {
    on_attach = on_attach,
    capabilities = capabilities,
  }

  for _, value in ipairs(lsp.servers) do
    local server = lsp.lspconfig_mapping[value] or value

    local lang_opts = server_configs[server]
    local conf = lang_opts and vim.tbl_deep_extend('keep', default_config, lang_opts) or vim.deepcopy(default_config)

    lspconfig[server].setup(conf)
  end
end

return M
