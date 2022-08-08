local onedark = require('onedark')

onedark.setup({
  style = 'darker',
  transparent = not vim.g.neovide,
  code_style = {
    comments = 'none',
  },
})

onedark.load()
