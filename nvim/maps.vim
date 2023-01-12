" Description: Keymaps
let mapleader = "\<Space>"

" Delete without yank
nnoremap <leader>d "_d
nnoremap x "_x

" Increment/decrement
nnoremap + <C-a>
nnoremap - <C-x>

" Select all
nnoremap <C-a> gg<S-v>G

" Save with root permission
if has('win32') || has('win32unix')
  command! W w
else
  command! W w !sudo -A tee > /dev/null %
endif

"-----------------------------
" Tabs

" Open current directory
noremap <silent> <tab> <cmd>BufferNext<cr>
inoremap <silent> <C-Tab> <cmd>BufferNext<cr>

noremap <silent> <S-tab> <cmd>BufferPrevious<cr>
inoremap <silent> <C-S-Tab> <cmd>BufferNext<cr>

noremap <silent> <leader>qq <cmd>BufferClose<cr>
nnoremap <silent> <leader>p <cmd>BufferPin<cr>

nnoremap <silent> <leader>bb <Cmd>BufferOrderByBufferNumber<CR>
nnoremap <silent> <leader>bd <Cmd>BufferOrderByDirectory<CR>
nnoremap <silent> <leader>bl <Cmd>BufferOrderByLanguage<CR>
nnoremap <silent> <leader>bw <Cmd>BufferOrderByWindowNumber<CR>

"------------------------------
" Windows

" Split window
nnoremap <silent> ss :split<CR><C-w>w
nnoremap <silent> sv :vsplit<CR><C-w>w

" Move window
nnoremap <leader>h <C-w>h
nnoremap <leader>k <C-w>k
nnoremap <leader>j <C-w>j
nnoremap <leader>l <C-w>l

" Resize window
nnoremap <C-w><left> <C-w><
nnoremap <C-w><right> <C-w>>
nnoremap <C-w><up> <C-w>+
nnoremap <C-w><down> <C-w>-

" CTRL+C/X/V setup
vnoremap <C-c> "+yi
vnoremap <C-x> "+c
vnoremap <C-v> c<ESC>"+p
inoremap <C-v> <C-r><C-o>+

" Duplicate Line up/down
nnoremap <s-a-up> VyP
vnoremap <s-a-up> `<yP
inoremap <silent> <s-a-up> <esc>VyPi

nnoremap <s-a-down> Vyp
vnoremap <s-a-down> `>yp
inoremap <silent> <s-a-down> <esc>Vypi

" NvimTree
nnoremap <silent> <leader>b <cmd>NvimTreeToggle<CR>

" Floaterm
tnoremap <silent> <c-n> <c-\><c-n>

nnoremap <silent> <leader>ft <cmd>FloatermNew<cr>
tnoremap <silent> <c-t> <c-\><c-n>:FloatermNew<cr>

nnoremap <silent> <leader>fn <cmd>FloatermNext<cr>
tnoremap <silent> <c-s-tab> <c-\><c-n>:FloatermNext<cr>

nnoremap <silent> <leader>fp <cmd>FloatermPrev<cr>
tnoremap <silent> <c-tab> <c-\><c-n>:FloatermPrev<cr>

nnoremap <silent> <leader>tt <cmd>FloatermToggle<cr>
tnoremap <silent> <c-q> <c-\><c-n>:FloatermToggle<cr>

nnoremap <silent> <leader>lg <cmd>FloatermNew lazygit<cr>
nnoremap <silent> <leader>ld <cmd>FloatermNew lazydocker<cr>
nnoremap <silent> <leader>lp <cmd>FloatermNew sudo btm<cr>

" Code Actions
nnoremap <leader>ca <cmd>TroubleToggle<cr>

" Todos
nnoremap <leader>td <cmd>TodoTelescope<cr>

" Force format
command Format lua require('config.null-ls').lsp_formatting(0)

nnoremap <s-a-f> <cmd>Format<cr>
inoremap <s-a-f> <cmd>Format<cr>
