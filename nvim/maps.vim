let mapleader = "\<Space>"
" Description: Keymaps

nnoremap <S-C-p> "0p
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
  command! W w !sudo tee > /dev/null %
endif

" Search for selected text, forwards or backwards.
vnoremap <silent> * :<C-U>
  \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
  \gvy/<C-R><C-R>=substitute(
  \escape(@", '/\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
  \gV:call setreg('"', old_reg, old_regtype)<CR>
vnoremap <silent> # :<C-U>
  \let old_reg=getreg('"')<Bar>let old_regtype=getregtype('"')<CR>
  \gvy?<C-R><C-R>=substitute(
  \escape(@", '?\.*$^~['), '\_s\+', '\\_s\\+', 'g')<CR><CR>
  \gV:call setreg('"', old_reg, old_regtype)<CR>

"-----------------------------
" Tabs

" Open current directory
nnoremap te :tabedit 
nnoremap <S-Tab> :tabprev<Return>
nnoremap <Tab> :tabnext<Return>

"------------------------------
" Windows

" Split window
nnoremap ss :split<Return><C-w>w
nnoremap sv :vsplit<Return><C-w>w

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
vnoremap <s-a-up> yP
inoremap <silent> <s-a-up> <esc>VyPi

nnoremap <s-a-down> Vyp
vnoremap <s-a-down> yp
inoremap <silent> <s-a-down> <esc>Vypi

" NvimTree
nnoremap <silent> <leader>b :NvimTreeToggle<CR>
nnoremap <silent> <leader>r :NVIMTreeRefresh<CR>

" Floaterm
tnoremap <silent> <c-n> <c-\><c-n>

nnoremap <silent> <leader>ft :FloatermNew<cr>
tnoremap <silent> <c-t> <c-\><c-n>:FloatermNew<cr>

nnoremap <silent> <leader>fn :FloatermNext<cr>
tnoremap <silent> <c-s-tab> <c-\><c-n>:FloatermNext<cr>

nnoremap <silent> <leader>fp :FloatermPrev<cr>
tnoremap <silent> <c-tab> <c-\><c-n>:FloatermPrev<cr>

nnoremap <silent> <leader>tt :FloatermToggle<cr>
tnoremap <silent> <c-q> <c-\><c-n>:FloatermToggle<cr>

nnoremap <silent> <leader>lg :FloatermNew lazygit<cr>
nnoremap <silent> <leader>ld :FloatermNew lazydocker<cr>
nnoremap <silent> <leader>lp :FloatermNew sudo btm<cr>

" Code Actions
nnoremap <leader>ca <cmd>TroubleToggle<cr>

" Todos
nnoremap <leader>td <cmd>TodoTelescope<cr>

" Force format
command Format lua require("config.null-ls.formatters").format()
command FormatRange lua require("config.null-ls.formatters").format_range()

nnoremap <s-a-f> <cmd>Format<cr>
vnoremap <c-k><c-f> <cmd>FormatRange<cr>
inoremap <s-a-f> <cmd>Format<cr>
