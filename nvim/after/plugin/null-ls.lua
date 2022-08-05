local null_ls = import('null-ls')
local null_config = require('config.null-ls')
local command_resolver = require('null-ls.helpers.command_resolver')
local utils = require('utils')

if not null_ls then
  return
end

local directory = utils.join(vim.fn.stdpath('data'), 'mason/bin')
local builtins = {
  code_actions = null_ls.builtins.code_actions,
  diagnostics = null_ls.builtins.diagnostics,
  formatting = null_ls.builtins.formatting,
}

local get_sources = function()
  local sources = {}

  for _, v in ipairs(null_config.tool_names) do
    local name = (type(v) == 'string' and v or v[1])
    local cmd = (IS_WINDOWS and 'cmd /c ' or '')
      .. utils.join(directory, (v.alias or name) .. (IS_WINDOWS and '.cmd' or ''))

    local opts = {
      timeout = 5000,
      dynamic_command = function(params)
        return command_resolver.from_node_modules(params)
          or command_resolver.from_yarn_pnp(params)
          or vim.fn.executable(params.command) == 1 and params.command
          or cmd
      end,
    }

    if v.opts then
      opts = utils.merge(opts, v.opts)
    end

    for builtin_name, builtin in pairs(builtins) do
      local ok = import(string.format('null-ls.builtins.%s.%s', builtin_name, name), utils.verbosity.none)

      if ok then
        table.insert(sources, builtin[name].with(opts))
      end
    end
  end

  return sources
end

-- if you want to set up formatting on save, you can use this as a callback
local augroup = vim.api.nvim_create_augroup('LspFormatting', {})

-- add to your shared on_attach callback
local on_attach = function(client, bufnr)
  if client.supports_method('textDocument/formatting') then
    vim.api.nvim_clear_autocmds({ group = augroup, buffer = bufnr })
    vim.api.nvim_create_autocmd('BufWritePre', {
      group = augroup,
      buffer = bufnr,
      callback = function()
        null_config.lsp_formatting(bufnr)
      end,
    })
  end
end

null_ls.setup({
  sources = get_sources(),
  on_attach = on_attach,
})
