local M = {}

M.servers = {
  'bash-language-server',
  'clangd',
  'css-lsp',
  'diagnostic-languageserver',
  'dockerfile-language-server',
  'emmet-ls',
  'gopls',
  'html-lsp',
  'json-lsp',
  'lua-language-server',
  'omnisharp',
  'powershell-editor-services',
  'pyright',
  'rust-analyzer',
  'stylelint-lsp',
  'taplo',
  'typescript-language-server',
  'vim-language-server',
  'yaml-language-server',
}

M.lspconfig_mapping = {
  ['bash-language-server'] = 'bashls',
  ['css-lsp'] = 'cssls',
  ['diagnostic-languageserver'] = 'diagnosticls',
  ['dockerfile-language-server'] = 'dockerls',
  ['emmet-ls'] = 'emmet_ls',
  ['html-lsp'] = 'html',
  ['json-lsp'] = 'jsonls',
  ['lua-language-server'] = 'sumneko_lua',
  ['powershell-editor-services'] = 'powershell_es',
  ['rust-analyzer'] = 'rust_analyzer',
  ['stylelint-lsp'] = 'stylelint_lsp',
  ['typescript-language-server'] = 'tsserver',
  ['vim-language-server'] = 'vimls',
  ['yaml-language-server'] = 'yamlls',
}

M.debuggers = {
  -- 'chrome-debug-adapter', -- and/or firefox-debug-adapter
  'codelldb',
  'debugpy',
  'go-debug-adapter',
  'netcoredbg',
}

M.formatters = {
  'csharpier',
  'goimports',
  'prettier',
  'stylua',
}

M.linters = {
  'editorconfig-checker',
  'eslint-lsp',
  'flake8',
  'golangci-lint',
  'pylint',
  'yamllint',
}

return M
