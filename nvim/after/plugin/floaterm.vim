let g:floaterm_autoclose=1
let g:floaterm_width=0.85
let g:floaterm_height=0.85
let g:floaterm_keymap='<Leader>ft'
let g:floaterm_keymap_toggle='<Leader>tt'

if executable('pwsh')
  let g:floaterm_shell = 'pwsh'
elseif executable('bash')
  let g:floaterm_shell = 'bash'
endif
