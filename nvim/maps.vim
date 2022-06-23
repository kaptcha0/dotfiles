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
nmap <C-a> gg<S-v>G

" Save with root permission
if has('win32') || has('win32unix') 
  command! W w !sudo tee > NULL %
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
nmap te :tabedit 
nmap <S-Tab> :tabprev<Return>
nmap <Tab> :tabnext<Return>

"------------------------------
" Windows

" Split window
nmap ss :split<Return><C-w>w
nmap sv :vsplit<Return><C-w>w

" Move window
nnoremap <leader>h <C-w>h
nnoremap <leader>k <C-w>k
nnoremap <leader>j <C-w>j
nnoremap <leader>l <C-w>l

" Resize window
nmap <C-w><left> <C-w><
nmap <C-w><right> <C-w>>
nmap <C-w><up> <C-w>+
nmap <C-w><down> <C-w>-

" CTRL+C/X/V setup
vmap <C-c> "+yi
vmap <C-x> "+c
vmap <C-v> c<ESC>"+p
imap <C-v> <C-r><C-o>+

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

" Diaglist
nnoremap <leader>ad <cmd>lua require('diaglist').open_all_diagnostics()<cr>
nnoremap <leader>bd <cmd>lua require('diaglist').open_buffer_diagnostics()<cr>

" Code Actions
nnoremap <leader>ca <cmd>CodeActionMenu<cr>
