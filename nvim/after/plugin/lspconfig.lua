if not vim.fn.exists("g:lspconfig") then
	return
end

-- lspconfig setup --
require("nvim-lsp-installer").setup({})
local lspconfig = require("lspconfig")
local protocol = require("vim.lsp.protocol")

-- Custom on_attach
local on_attach = function(client, bufnr)
	local function buf_set_keymap(...)
		vim.api.nvim_buf_set_keymap(bufnr, ...)
	end
	local function buf_set_option(...)
		vim.api.nvim_buf_set_option(bufnr, ...)
	end

	-- Mappings
	local opts = { noremap = true, silent = true }

	buf_set_keymap("n", "gd", "<cmd>lua vim.lsp.buf.definition()<CR>", opts)
	buf_set_keymap("n", "K", "<cmd>lua vim.lsp.buf.hover()<cr>", opts)
	buf_set_keymap("i", "<C-i>", "<cmd>CodeActionMenu<cr>", opts)

	protocol.CompletionItemKind = {
		"", -- Text
		"", -- Method
		"", -- Function
		"", -- Constructor
		"", -- Field
		"", -- Variable
		"", -- Class
		"ﰮ", -- Interface
		"", -- Module
		"", -- Property
		"", -- Unit
		"", -- Value
		"", -- Enum
		"", -- Keyword
		"﬌", -- Snippet
		"", -- Color
		"", -- File
		"", -- Reference
		"", -- Folder
		"", -- EnumMember
		"", -- Constant
		"", -- Struct
		"", -- Event
		"ﬦ", -- Operator
		"", -- TypeParameter
	}
end

-- Enable some language servers with the additional completion capabilities offered by nvim-cmp
local servers = {
	"clangd",
	"bashls",
	"diagnosticls",
	"dockerls",
	"emmet_ls",
	"eslint",
	"jsonls",
	"sumneko_lua",
	"omnisharp",
	"powershell_es",
	"rust_analyzer",
	"taplo",
	"tsserver",
	"vimls",
	"yamlls",
}

local capabilities = require("cmp_nvim_lsp").update_capabilities(vim.lsp.protocol.make_client_capabilities())

local server_options = {
	emmet_ls = {
		filetypes = { "html", "typescriptreact", "javascriptreact", "css", "sass", "scss", "less" },
	},
	jsonls = {
		schemas = require("schemastore").json.schemas({}),
		validate = { enable = true },
	},
	omnisharp = {
		cmd = { "omnisharp", "-lsp", "-hpid", tostring(pid) },
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

local default_config = {
	on_attach = on_attach,
	capabilities = capabilities,
}

for _, value in ipairs(servers) do
	local conf = vim.deepcopy(default_config)
	local lang_opts = server_options[value]

	if lang_opts ~= nil then
		conf = vim.tbl_deep_extend("keep", default_config, lang_opts)
	end

	lspconfig[value].setup(conf)
end
