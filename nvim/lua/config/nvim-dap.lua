local dap, dapui = import('dap'), import('dapui')
local dap_py, dap_rust, dap_vscode_js = import('dap-python'), import('rust-tools'), import('dap-vscode-js')
local utils = require('utils')

if not dap or not dapui then
  return
end

if not dap_py or not dap_rust or not dap_vscode_js then
  return
end

local M = {}
local mason_path = utils.join(vim.fn.stdpath('data'), 'mason')

M.configs = {
  cs = {
    {
      type = 'coreclr',
      name = 'launch - netcoredbg',
      request = 'launch',
      program = function()
        return vim.fn.input('Path to dll', utils.join(vim.fn.getcwd(), 'bin/Debug/'), 'file')
      end,
    },
  },
  cpp = {
    {
      name = 'Launch file',
      type = 'codelldb',
      request = 'launch',
      program = function()
        return vim.fn.input('Path to executable: ', utils.join(vim.fn.getcwd(), '/'), 'file')
      end,
      cwd = '${workspaceFolder}',
      stopOnEntry = true,
    },
  },
  javascript = {
    {
      type = 'pwa-node',
      request = 'launch',
      name = 'Launch file',
      program = '${file}',
      cwd = '${workspaceFolder}',
    },
    {
      type = 'pwa-node',
      request = 'attach',
      name = 'Attach',
      processId = require('dap.utils').pick_process,
      cwd = '${workspaceFolder}',
    },
  },
  python = {
    {
      type = 'python',
      request = 'launch',
      name = 'Default lauch configurations',
      console = 'internalConsole',
      program = '${file}',
    },
  },
}

M.configs.c = M.configs.cpp
M.configs.typescript = M.configs.javascript
M.configs.javascriptreact = M.configs.javascript
M.configs.typescriptreact = M.configs.javascript
M.configs.rust = M.configs.cpp

M.adapters = {
  coreclr = {
    type = 'executable',
    command = vim.fn.exepath('netcoredbg'),
    args = { '--interpreter=vscode' },
  },
}

function M.breakpoint()
  dap.toggle_breakpoint()
end

function M.continue()
  dap.continue()
end

function M.step_over()
  dap.step_over()
end

function M.step_into()
  dap.step_into()
end

function M.setup()
  M.keybindings()
  M.ui()
end

function M.keybindings()
  local maps = {
    ['<leader>bp'] = 'breakpoint',
    ['<leader>c'] = 'continue',
    ['<leader>si'] = 'step_into',
    ['<leader>so'] = 'step_over',
  }

  for k, v in pairs(maps) do
    map('n', k, "<cmd>lua require('dap')." .. v .. '()<cr>', { silent = true })
  end
end

function M.ui()
  dapui.setup()

  dap.listeners.after.event_initialized['dapui_config'] = function()
    dapui.open()
  end

  dap.listeners.before.event_terminated['dapui_config'] = function()
    dapui.close()
  end

  dap.listeners.before.event_exited['dapui_config'] = function()
    dapui.close()
  end
end

function M.extentions()
  -- dap-python
  dap_py.setup(vim.fn.exepath('python'))

  -- Codelldb
  local codelldb_path = utils.join(mason_path, 'packages/codelldb/lldb')
  local liblldb_path = ''

  if IS_WINDOWS then
    liblldb_path = utils.join(codelldb_path, 'bin/liblldb.dll')
  elseif IS_LINUX then
    liblldb_path = utils.join(codelldb_path, 'lib/liblldb.so')
  elseif IS_MAC then
    liblldb_path = utils.join(codelldb_path, 'lib/liblldb.dylib')
  else
    utils.error('liblldb is not found', '[nvim-dap.lua]: extentions')
  end

  local opts = {
    -- ... other configs
    dap = {
      adapter = require('rust-tools.dap').get_codelldb_adapter(vim.fn.exepath('codelldb'), liblldb_path),
    },
  }

  dap_rust.setup(opts)

  -- dap-vscode-js
  dap_vscode_js.setup({
    -- node_path = "node", -- Path of node executable. Defaults to $NODE_PATH, and then "node"
    -- debugger_path = "(runtimedir)/site/pack/packer/opt/vscode-js-debug", -- Path to vscode-js-debug installation.
    adapters = { 'pwa-node', 'pwa-chrome', 'pwa-msedge', 'node-terminal', 'pwa-extensionHost' }, -- which adapters to register in nvim-dap
  })
end

return M
