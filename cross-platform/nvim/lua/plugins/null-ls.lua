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
    local cmd = utils.join(directory, (v.alias or name) .. (IS_WINDOWS and '.cmd' or ''))

    local opts = {
      timeout = 5000,
      dynamic_command = function(params)
        local node_modules = command_resolver.from_node_modules(params)(params)
        local yarn_pnp = command_resolver.from_yarn_pnp(params)(params)
        local exec = vim.fn.executable(params.command) == 1 and params.command or cmd

        local res = exec

        if node_modules ~= params.command then
          res = node_modules
        end

        if yarn_pnp ~= params.command then
          res = yarn_pnp
        end

        return res
      end,
    }

    if v.opts then
      opts = utils.merge(opts, v.opts)
    end

    for bi_type, builtin in pairs(builtins) do
      local ok = import(string.format('null-ls.builtins.%s.%s', bi_type, name), utils.verbosity.none)

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
    print('Attached Null-Ls')
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
  debug = true,
  on_attach = on_attach,
})
