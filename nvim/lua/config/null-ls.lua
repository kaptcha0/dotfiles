local M = {}
local utils = require('utils')

M.tool_names = {
  'ansible-lint',
  'csharpier',
  {
    'editorconfig_checker',
    alias = 'editorconfig-checker',
  },
  'eslint',
  'flake8',
  'gitsigns',
  {
    'prettier',
    opts = {
      env = {
        PRETTIERD_DEFAULT_CONFIG = vim.fn.stdpath('config') .. '/configs/.prettierrc.yml',
      },
    },
  },
  'pylint',
  'refactoring',
  'stylua',
  'yamllint',
}

function M.lsp_formatting(bufnr)
  vim.lsp.buf.format({
    filter = function(client)
      -- apply whatever logic you want (in this example, we'll only use null-ls)
      return client.name == 'null-ls'
    end,
    bufnr = bufnr,
  })
  utils.info('null-ls formatting', 'Formatted ' .. vim.api.nvim_buf_get_name(bufnr) .. ' successfully')
end

return M
