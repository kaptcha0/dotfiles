local tree = require('utils').get_package('nvim-tree')

if not tree then
  return
end

-- Default opts
tree.setup()
