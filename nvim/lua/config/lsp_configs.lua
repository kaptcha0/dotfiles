local M = {
  emmet_ls = {
    filetypes = { 'html', 'typescriptreact', 'javascriptreact', 'css', 'sass', 'scss', 'less' },
  },
  gopls = {
    cmd = { vim.fn.exepath('gopls') },
  },
  jsonls = {
    schemas = require('schemastore').json.schemas({}),
    validate = { enable = true },
  },
  omnisharp = {
    enable_import_completion = true,
    enable_roslyn_analyzers = true,
    cmd = { 'omnisharp' },
    organize_imports_on_format = true,
  },
  stylelint_lsp = {
    cssInJs = true,
    filetypes = { 'css', 'less', 'postcss', 'sass', 'scss', 'sugarss', 'vue', 'wxss' },
  },
  taplo = {
    cmd = { vim.fn.exepath('taplo'), 'lsp', 'stdio' },
  },
  tsserver = {
    filetypes = { 'javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'typescript.tsx' },
  },
  yamlls = {
    singleQuote = true,
  },
}

return M
