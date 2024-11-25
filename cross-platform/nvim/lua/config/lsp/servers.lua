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
  'powershell-editor-services',
  'pyright',
  'rnix-lsp',
  'stylelint-lsp',
  'taplo',
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
  ['nil'] = 'nil_ls',
  ['powershell-editor-services'] = 'powershell_es',
  ['rnix-lsp'] = 'rnix',
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
