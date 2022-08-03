local null_ls = import('null-ls')
local command_resolver = require('null-ls.helpers.command_resolver')
local utils = require('utils')

if not null_ls then
  return
end

local builtins = null_ls.builtins
local tools = { builtins.formatting, builtins.code_actions, builtins.diagnostics }
local directory = vim.fn.stdpath('data') .. '/mason/bin/'

local tool_names = {
  'csharpier',
  {
    'editorconfig_checker',
    alias = 'editorconfig-checker',
  },
  'eslint_d',
  'flake8',
  {
    'prettierd',
    opts = {
      env = {
        PRETTIERD_DEFAULT_CONFIG = vim.fn.stdpath('config') .. '/configs/.prettierrc.json',
      },
    },
  },
  'pylint',
  'stylua',
  'yamllint',
}

local function get_sources()
  local sources = {}

  for k, v in pairs(tool_names) do
    local name = (type(v) == 'string' and v or v[1])
    local cmd = (IS_WINDOWS and 'cmd /c ' or '') .. directory .. (v.alias or name) .. (IS_WINDOWS and '.cmd' or '')

    local opts = {
      dynamic_command = function(params)
        return command_resolver.from_node_modules(params)
          or command_resolver.from_yarn_pnp(params)
          or vim.fn.executable(params.command) == 1 and params.command
          or cmd
      end,
    }

    if v.opts then
      for _, option in pairs(v.opts) do
        opts[k] = option
      end
    end

    for _, tool in ipairs(tools) do
      if tool[name] then
        table.insert(sources, tool[name].with(opts))
      end
    end
  end

  return sources
end

local function lsp_formatting(bufnr)
  vim.lsp.buf.format({
    filter = function(client)
      -- apply whatever logic you want (in this example, we'll only use null-ls)
      return client.name == 'null-ls'
    end,
    bufnr = bufnr,
  })
end

-- if you want to set up formatting on save, you can use this as a callback
local augroup = vim.api.nvim_create_augroup('LspFormatting', {})

-- add to your shared on_attach callback
local function on_attach(client, bufnr)
  if client.supports_method('textDocument/formatting') then
    vim.api.nvim_clear_autocmds({ group = augroup, buffer = bufnr })
    vim.api.nvim_create_autocmd('BufWritePre', {
      group = augroup,
      buffer = bufnr,
      callback = function()
        lsp_formatting(bufnr)
        utils.info('Formatted ' .. vim.api.nvim_buf_get_name(bufnr) .. ' successfully', 'null_ls formatting')
      end,
    })
  end
end

null_ls.setup({
  sources = get_sources(),
  on_attach = on_attach,
  debug = true,
  log_level = 'info',
})
