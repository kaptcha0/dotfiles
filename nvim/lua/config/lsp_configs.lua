local M = {
  emmet_ls = {
    filetypes = { 'html', 'typescriptreact', 'javascriptreact', 'css', 'sass', 'scss', 'less' },
  },
  jsonls = {
    schemas = require('schemastore').json.schemas({}),
    validate = { enable = true },
  },
  omnisharp = {
    cmd = { 'omnisharp' },
    enable_roslyn_analyzers = true,
    organize_imports_on_format = true,
    enable_import_completion = true,
  },
  taplo = {
    cmd = { vim.fn.exepath('taplo'), 'lsp', 'stdio' },
  },
  tsserver = {
    filetypes = { 'javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'typescript.tsx' },
  },
  yamlls = {
    schemas = {
      ['https://raw.githubusercontent.com/quantumblacklabs/kedro/develop/static/jsonschema/kedro-catalog-0.17.json'] = 'conf/**/*catalog*',
      ['https://json.schemastore.org/github-workflow.json'] = '/.github/workflows/*',
    },
  },
}

return M
