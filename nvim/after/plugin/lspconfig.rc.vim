if !exists('g:lspconfig') | finish | end

lua << EOF
-- lspconfig setup --
require("nvim-lsp-installer").setup {}
local lspconfig = require 'lspconfig'
local protocol = require 'vim.lsp.protocol'

-- Custom on_attach
local on_attach = function(client, bufnr)
  local function buf_set_keymap(...) vim.api.nvim_buf_set_keymap(bufnr, ...) end
  local function buf_set_option(...) vim.api.nvim_buf_set_option(bufnr, ...) end
  
  -- Mappings
  local opts = { noremap = true, silent = true }
  
  buf_set_keymap('n', 'gd', '<Cmd>lua vim.lsp.buf.definition()<CR>', opts)
  
  if client.server_capabilities.documentFormattingProvider then
    vim.api.nvim_command [[augroup Format]]
    vim.api.nvim_command [[autocmd! * <buffer>]]
    vim.api.nvim_command [[autocmd BufWritePre <buffer> lua vim.lsp.buf.format()]]
    vim.api.nvim_command [[augroup END]]
  end

  protocol.CompletionItemKind = {
    '', -- Text
    '', -- Method
    '', -- Function
    '', -- Constructor
    '', -- Field
    '', -- Variable
    '', -- Class
    'ﰮ', -- Interface
    '', -- Module
    '', -- Property
    '', -- Unit
    '', -- Value
    '', -- Enum
    '', -- Keyword
    '﬌', -- Snippet
    '', -- Color
    '', -- File
    '', -- Reference
    '', -- Folder
    '', -- EnumMember
    '', -- Constant
    '', -- Struct
    '', -- Event
    'ﬦ', -- Operator
    '', -- TypeParameter
  }
end

-- Coq setup
local coq = require 'coq'

-- Enable some language servers with the additional completion capabilities offered by nvim-cmp
local servers = { 'bashls', 'dockerls', 'omnisharp', 'powershell_es', 'rust_analyzer', 'tsserver', 'vimls', 'yamlls' }

local server_options = {
  tsserver = { 
    filetypes = { 'typescript', 'typescriptreact', 'typescript.tsx' }
  },
  omnisharp = {
    cmd = { 'omnisharp', '-lsp', '-hpid', tostring(pid) },
  }
}

local default_config = {
  on_attach = on_attach
}

for _, value in ipairs(servers) do
  local conf = {}
  local lang_opts = server_options[value]  

  for k, v in pairs(default_config) do
    conf[k] = v
  end

  if lang_opts ~= nil then
    for opt, val in pairs(server_options[value]) do
     conf[opt] = val 
    end
  end

  lspconfig[value].setup(
    coq.lsp_ensure_capabilities(conf)
  )
end
-- Add prettier/eslint eventually
-- --
EOF
