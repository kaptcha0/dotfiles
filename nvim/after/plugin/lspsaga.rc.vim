if !exists('g:loaded_lspsaga') | finish | endif

lua << EOF
local saga = import('lspsaga')

if not saga then
  return
end

saga.init_lsp_saga {
  error_sign = '',
  warn_sign = '𥉉',
  hint_sign = '',
  infor_sign = '',
  border_style = 'round',
}

EOF

nnoremap <silent> <C-j> <Cmd>Lspsaga diagnostic_jump_next<Cr>
nnoremap <silent>K <Cmd>Lspsaga hover_doc<Cr>
inoremap <silent> <C-k> <Cmd>Lspsaga signature_help<Cr>
nnoremap <silent> gh <Cmd>Lspsaga lsp_finder<Cr>

