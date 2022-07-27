local lsp = require('lsp')
local utils = require('utils')

local lspconfig = utils.get_package("lspconfig")
local cmp = utils.get_package("cmp_nvim_lsp")

if not cmp or not lspconfig then
  return
end

-- lspconfig setup --
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
local capabilities = cmp.update_capabilities(vim.lsp.protocol.make_client_capabilities())

local default_config = {
	on_attach = on_attach,
	capabilities = capabilities,
}

for _, value in ipairs(lsp.servers) do
  value = lsp.lspconfig_mapping[value] or value
	-- local conf = vim.deepcopy(default_config)
	local lang_opts = lsp.server_options[value]
  local conf = vim.deepcopy(default_config) or vim.tbl_deep_extend("keep", default_config, lang_opts)

	-- if not lang_opts then
	-- 	conf = vim.tbl_deep_extend("keep", default_config, lang_opts)
	-- end

	lspconfig[value].setup(conf)
end
