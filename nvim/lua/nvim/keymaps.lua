-- Description: Keymaps --
vim.g.mapleader = ' '

-- Delete without yank
map('n', '<leader>d', '"_d')
map('n', 'x', '"_x')

-- Select all
map('n', '<c-a>', 'gg<s-v>G')

-- Next tab
map('n', '<tab>', '<cmd>bnext<cr>', { silent = true })
map('i', '<c-tab>', '<cmd>bnext<cr>', { silent = true })

-- Previous tab
map('n', '<s-tab>', '<cmd>bprevious<cr>', { silent = true })
map('i', '<c-s-tab>', '<cmd>bprevious<cr>', { silent = true })

-- Split window
map('n', 'sh', '<cmd>split<cr><c-w>w', { silent = true })
map('n', 'sv', '<cmd>vsplit<cr><c-w>w', { silent = true })

-- Move window
map('n', '<leader>h', '<c-w>h', { silent = true })
map('n', '<leader>k', '<c-w>k', { silent = true })
map('n', '<leader>j', '<c-w>j', { silent = true })
map('n', '<leader>l', '<c-w>l', { silent = true })

-- Resize window
map('n', '<c-w><up>', '<c-w>+', { silent = true })
map('n', '<c-w><down>', '<c-w>-', { silent = true })
map('n', '<c-w><left>', '<c-w><', { silent = true })
map('n', '<c-w><right>', '<c-w>>', { silent = true })

-- CTRL+C/X/V setup
map('v', '<c-c>', '"+yi', { silent = true })
map('v', '<c-x>', '"+c', { silent = true })
map('v', '<c-v>', 'c<esc>"+p', { silent = true })
map('i', '<c-v>', '<c-r><c-o>+', { silent = true })

-- Duplicate Line up/down
map('n', '<s-a-up>', 'VyP', { silent = true })
map('v', '<s-a-up>', '`<yP', { silent = true })
map('i', '<s-a-up>', '<esc>VyPi', { silent = true })

map('n', '<s-a-down>', 'Vyp', { silent = true })
map('v', '<s-a-down>', '`>yp', { silent = true })
map('i', '<s-a-down>', '<esc>Vypi', { silent = true })

-- NvimTree
map('n', '<leader>b', '<cmd>NvimTreeToggle<CR>', { silent = true })

-- Floaterm
map('t', '<c-n>', '<c-\\><c-n>', { silent = true })

map('n', '<leader>ft', '<cmd>FloatermNew<cr>', { silent = true })
map('t', '<c-t>', '<c-\\><c-n>:FloatermNew<cr>', { silent = true })

map('n', '<leader>fn', '<cmd>FloatermNext<cr>', { silent = true })
map('t', '<c-s-tab>', '<c-\\><c-n>:FloatermNext<cr>', { silent = true })

map('n', '<leader>fp', '<cmd>FloatermPrev<cr>', { silent = true })
map('t', '<c-tab>', '<c-\\><c-n>:FloatermPrev<cr>', { silent = true })

map('n', '<leader>tt', '<cmd>FloatermToggle<cr>', { silent = true })
map('t', '<c-q>', '<c-\\><c-n>:FloatermToggle<cr>', { silent = true })

map('n', '<leader>lg <cmd>FloatermNew', 'lazygit<cr>', { silent = true })
map('n', '<leader>ld <cmd>FloatermNew', 'lazydocker<cr>', { silent = true })
map('n', '<leader>lp <cmd>FloatermNew sudo', 'btm<cr>', { silent = true })

-- Code Actions
map('n', '<leader>ca', '<cmd>TroubleToggle<cr>', { silent = true })

-- Todos
map('n', '<leader>td', '<cmd>TodoTelescope<cr>', { silent = true })

-- Force format
vim.api.nvim_create_user_command('Format', function()
  require('config.null-ls').lsp_formatting(0)
end, {})

map('n', '<s-a-f>', '<cmd>Format<cr>', { silent = true })
map('i', '<s-a-f>', '<cmd>Format<cr>', { silent = true })
