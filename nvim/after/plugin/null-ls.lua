if not vim.fn.exists("g:null-ls") then
	return
end

local nullls = require("null-ls")

local sources = {
  nullls.builtins.code_actions.eslint_d,
  nullls.builtins.diagnostics.actionlint,
  nullls.builtins.diagnostics.eslint_d,
  nullls.builtins.diagnostics.stylelint,
  nullls.builtins.formatting.uncrustify,
  nullls.builtins.formatting.stylua,
  nullls.builtins.formatting.prettierd,
  nullls.builtins.formatting.rustfmt
}

nullls.setup({
  sources = sources
})
