if !exists('g:loaded_nvim_treesitter') | finish | end

lua << EOF
local configs = import('nvim-treesitter.configs')

if not configs then
  return
end

configs.setup {
  highlight = {
    enable = true,
    disable = {}
  },
  indent = {
    enable = true,
    disable = {},
  },
  ensure_installed = {
    'c_sharp',
    'cpp',
    'css',
    'dockerfile',    
    'go',
    'html',
    'javascript',
    'json',
    'lua',
    'markdown',
    'nix',
    'rust',
    'scss',
    'toml',
    'tsx',
    'typescript',
    'vim',
    'yaml',
  }
}
EOF
