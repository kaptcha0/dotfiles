local M = {}

M.servers = {
	"bash-language-server",
	"clangd",
  "css-lsp",
	"diagnostic-languageserver",
	"dockerfile-language-server",
	"emmet-ls",
  "html-lsp",
	"json-lsp",
	"lua-language-server",
	"omnisharp",
	"powershell-editor-services",
  "pyright",
	"rust-analyzer",
  "stylelint-lsp",
	"taplo",
	"typescript-language-server",
	"vim-language-server",
	"yaml-language-server",
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
  ['yaml-language-server'] = 'yamlls'
}

M.server_options = {
	emmet_ls = {
		filetypes = { "html", "typescriptreact", "javascriptreact", "css", "sass", "scss", "less" },
	},
	jsonls = {
		schemas = require("schemastore").json.schemas({}),
		validate = { enable = true },
	},
	omnisharp = {
    cmd = { 'omnisharp' },
    enable_roslyn_analyzers = true,
    organize_imports_on_format = true,
    enable_import_completion = true,
	},
	tsserver = {
		filetypes = { "javascript", "javascriptreact", "typescript", "typescriptreact", "typescript.tsx" },
	},
	yamlls = {
		schemas = {
			["https://raw.githubusercontent.com/quantumblacklabs/kedro/develop/static/jsonschema/kedro-catalog-0.17.json"] = "conf/**/*catalog*",
			["https://json.schemastore.org/github-workflow.json"] = "/.github/workflows/*",
		},
	},
}

M.debuggers = {}

M.formatters = {
  "csharpier",
  "prettierd",
  "stylua"
}

M.linters = {
  "editorconfig-checker",
  "eslint_d",
  "flake8",
  "pylint",
  "yamllint"
}

return M
