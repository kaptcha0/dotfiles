if !exists('g:loaded_nvim_treesitter') | finish | end

lua << EOF
require 'nvim-treesitter.configs'.setup {
  highlight = {
    enable = true,
    disable = {}
  },
  indent = {
    enable = true,
    disable = {},
  },
  ensure_installed = {
    'javascript',
    'typescript',
    'tsx',
    'toml',
    'rust',
    'json',
    'yaml',
    'lua',
    'c_sharp',
    'cpp',
    'dockerfile',
    'markdown',
    'vim',
    'html',
    'css',
    'scss'
  }
}
EOF
