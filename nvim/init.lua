-- Fundamentals
vim.o.enc = 'utf-8'
vim.o.nocompatible = true
vim.o.number = true
vim.o.fileencodings = 'utf-8,sjis,euc-jp,latin'
vim.cmd([[syntax enable]])

vim.o.title = true
vim.o.autoindent = true
vim.o.smartindent = true
vim.o.shiftwidth = 2
vim.o.tabstop = 2
vim.o.nobackup = true
vim.o.hlsearch = true
vim.o.cmdheight = 1
vim.o.laststatus = 2
vim.o.scrolloff = 10
vim.o.expandtab = true
vim.o.backupskip = '/tmp/*,/private/tmp/*'
vim.o.inccommand = 'split'

vim.o.t_BE = nil

vim.o.nosc = true
vim.o.noru = true
vim.o.nosm = true

vim.o.lazyredraw = true
vim.o.ignorecase = true
vim.o.smarttab = true

vim.cmd([[filetype plugin indent on]])

vim.o.ai = true -- Auto indent
vim.o.si = true -- Smart indent
vim.o.wrap = false
vim.o.backspace = 'start,eol,indent'
vim.o.foldmethod = 'expr'
vim.o.foldexpr = 'nvim_treesitter#foldexpr()'

vim.o.path = vim.o.path .. '**'
vim.o.wildignore = vim.o.wildignore .. '*/node_modules/*'

vim.cmd([[
  " init autocmd
  autocmd!
  " Turn off paste mode when leaving insert
  autocmd InsertLeave * set nopaste

  " Start LSP automatically
  autocmd BufCreate,BufAdd *.* LspStart

  autocmd BufUnload *.* LspStop

  " Add asterisks in block comments
  set formatoptions+=cro
]])

-- Highlights
vim.o.cursorline = true

vim.cmd([[
  " Set cursor line color on visual mode
  highlight Visual cterm=NONE ctermbg=236 ctermfg=NONE guibg=Grey40

  highlight LineNr cterm=none ctermfg=240 guifg=#2b506e guibg=#000000

  augroup BgHighlight
    autocmd!
    autocmd WinEnter * set cul
    autocmd WinLeave * set nocul
  augroup END

  if &term =~ "screen"
  autocmd BufEnter * if bufname("") !~ "^?[A-Za-z0-9?]*://" | silent! exe '!echo -n "\ek[`hostname`:`basename $PWD`/`basename %`]\e\\"' | endif
  autocmd VimLeave * silent!  exe '!echo -n "\ek[`hostname`:`basename $PWD`]\e\\"'
  endif
]])

-- File types
vim.o.suffixesadd = '.ts,.tsx,.cs,.csproj,.sln,.js,.es,.jsx,.json,.css,.less,.sass,.styl,.php,.py,.md'

vim.cmd([[
  " JavaScript
  au BufNewFile,BufRead *.es6 setf javascript
  " TypeScript
  au BufNewFile,BufRead *.tsx setf typescriptreact
  " Markdown
  au BufNewFile,BufRead *.md set filetype=markdown
  au BufNewFile,BufRead *.mdx set filetype=markdown

  autocmd FileType coffee setlocal shiftwidth=2 tabstop=2
  autocmd FileType ruby setlocal shiftwidth=2 tabstop=2
  autocmd FileType yaml setlocal shiftwidth=2 tabstop=2
]])

-- Imports
require('globals')
require('plugins')
require('nvim.os')
require('nvim.keymaps')

-- Syntax theme
if vim.fn.exists('&termguicolors') and vim.fn.exists('&winblend') then
  vim.o.termguicolors = true
  vim.o.winblend = 10
  vim.o.wildoptions = 'pum'
  vim.o.publend = 5
  vim.o.background = 'dark'
end

-- Editor setup
vim.g.python3_host_prog = IS_WINDOWS and vim.fn.exepath('python') or vim.fn.exepath('python3')
vim.o.mouse = 'a'

-- Extras
vim.o.exrc = true

vim.cmd([[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerCompile
  augroup end
]])
