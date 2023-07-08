local M = {}

M.servers = {
  'ansible-language-server',
  'bash-language-server',
  'clangd',
  'css-lsp',
  'diagnostic-languageserver',
  'dockerfile-language-server',
  'emmet-ls',
  'html-lsp',
  'json-lsp',
  'lua-language-server',
  'marksman',
  IS_WINDOWS and 'powershell-editor-services',
  'pyright',
  'stylelint-lsp',
  'typescript-language-server',
  'vim-language-server',
  'yaml-language-server',
}

M.lspconfig_mapping = {
  ['ansible-language-server'] = 'ansiblels',
  ['bash-language-server'] = 'bashls',
  ['css-lsp'] = 'cssls',
  ['diagnostic-languageserver'] = 'diagnosticls',
  ['dockerfile-language-server'] = 'dockerls',
  ['emmet-ls'] = 'emmet_ls',
  ['html-lsp'] = 'html',
  ['json-lsp'] = 'jsonls',
  ['lua-language-server'] = 'lua_ls',
  ['powershell-editor-services'] = 'powershell_es',
  ['stylelint-lsp'] = 'stylelint_lsp',
  ['typescript-language-server'] = 'tsserver',
  ['vim-language-server'] = 'vimls',
  ['yaml-language-server'] = 'yamlls',
}

M.formatters = {
  'csharpier',
  'prettier',
  'stylua',
}

M.linters = {
  'ansible-lint',
  'editorconfig-checker',
  'eslint-lsp',
  'flake8',
  'pylint',
  'yamllint',
}

return M
