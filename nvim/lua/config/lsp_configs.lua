local M = {
  emmet_ls = {
    filetypes = { 'html', 'typescriptreact', 'javascriptreact', 'css', 'sass', 'scss', 'less' },
  },
  jsonls = {
    schemas = require('schemastore').json.schemas({}),
    validate = { enable = true },
  },
  omnisharp = {
    enable_import_completion = true,
    enable_roslyn_analyzers = true,
    organize_imports_on_format = true,
  },
  stylelint_lsp = {
    cssInJs = true,
    filetypes = { 'css', 'less', 'postcss', 'sass', 'scss', 'sugarss', 'vue', 'wxss' },
  },
  taplo = {
    args = { 'lsp', 'stdio' },
  },
  tsserver = {
    filetypes = { 'javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'typescript.tsx' },
  },
  yamlls = {
    singleQuote = true,
    args = { '--stdio' },
  },
}

return M
