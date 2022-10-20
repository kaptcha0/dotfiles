" Fundamentals "{{{

" ---------------------------------------------------------------------

" init autocmd
autocmd!
" set script encoding
scriptencoding utf-8
" stop loading config if it's on tiny or small
if !1 | finish | endif

set nocompatible
set number
syntax enable
set fileencodings=utf-8,sjis,euc-jp,latin
set encoding=utf-8
set title
set autoindent
set smartindent
set background=dark
set nobackup
set hlsearch
set showcmd
set cmdheight=1
set laststatus=2
set scrolloff=10
set expandtab
"let loaded_matchparen = 1
set backupskip=/tmp/*,/private/tmp/*

" incremental substitution (neovim)
if has('nvim')
  set inccommand=split
endif

" Suppress appending <PasteStart> and <PasteEnd> when pasting
set t_BE=

set nosc noru nosm
" Don't redraw while executing macros (good performance config)
set lazyredraw
"set showmatch
" How many tenths of a second to blink when matching brackets
"set mat=2
" Ignore case when searching
set ignorecase
" Be smart when using tabs ;)
set smarttab

" indents
filetype plugin indent on
set shiftwidth=2
set tabstop=2
" set noexpandtab
set ai "Auto indent
set si "Smart indent
set nowrap "No Wrap lines
set backspace=start,eol,indent
set foldmethod=expr
set foldexpr=nvim_treesitter#foldexpr()

" Finding files - Search down into subfolders
set path+=**
set wildignore+=*/node_modules/*

" Set file encoding
if has('win32') || has('win32unix')
  set fileformat=dos
  set fileformats=dos,unix
else
  set fileformat=unix
  set fileformats=unix,dos
endif

" Turn off paste mode when leaving insert
autocmd InsertLeave * set nopaste

" Start LSP automatically
autocmd BufCreate,BufAdd *.* LspStart

autocmd BufUnload *.* LspStop

" Add asterisks in block comments
set formatoptions+=cro
"}}}

" Highlights "{{{
" ---------------------------------------------------------------------
set cursorline
"set cursorcolumn

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

"}}}

" File types "{{{
" ---------------------------------------------------------------------
" JavaScript
au BufNewFile,BufRead *.es6 setf javascript
" TypeScript
au BufNewFile,BufRead *.tsx setf typescriptreact
" Markdown
au BufNewFile,BufRead *.md set filetype=markdown
au BufNewFile,BufRead *.mdx set filetype=markdown

set suffixesadd=.ts,.tsx,.cs,.csproj,.sln,.js,.es,.jsx,.json,.css,.less,.sass,.styl,.php,.py,.md

autocmd FileType coffee setlocal shiftwidth=2 tabstop=2
autocmd FileType ruby setlocal shiftwidth=2 tabstop=2
autocmd FileType yaml setlocal shiftwidth=2 tabstop=2

"}}}

" Imports "{{{
" ---------------------------------------------------------------------
lua require('globals')
lua require('plugins')

if has('win32')
  runtime ./windows.vim
else
  runtime ./unix.vim
endif

runtime ./maps.vim
"}}}

"Syntax theme "{{{
" ---------------------------------------------------------------------

" true color
if exists("&termguicolors") && exists("&winblend")
  syntax enable
  set termguicolors
  set winblend=10
  set wildoptions=pum
  set pumblend=5
  
  set background=dark
endif

"}}}

"Editor setup "{{{
" ---------------------------------------------------------------------
set mouse=a

" python
lua << EOF
  vim.g.python3_host_prog = IS_WINDOWS and vim.fn.exepath("python") or vim.fn.exepath("python3")
  -- let g:python3_host_prog = exepath("python")
EOF

" Neovide
if exists('g:neovide')
  set guifont=CaskaydiaCove_NF,JetBrainsMono_NF,codicon,Cascadia_Code_PL:h10
  let g:neovide_scale_factor=0.9    
  let g:transparency = 0.8
  let g:neovide_background_color = '#0f1117'.printf('%x', float2nr(255 * g:transparency))
endif
"}}}

" Extras "{{{
" ---------------------------------------------------------------------
set exrc

augroup packer_user_config
  autocmd!
  autocmd BufWritePost plugins.lua source <afile> | PackerCompile
augroup end


"}}}


" vim: set foldmethod=marker foldlevel=0:
