local M = {}

M.highlight_groups = {
  PmenuSel = { bg = '#282C34', fg = 'NONE' },
  Pmenu = { fg = '#C5CDD9', bg = '#22252A' },

  -- gray
  CmpItemAbbrDeprecated = { bg = 'NONE', fg = '#808080', strikethrough = true },

  -- blue
  CmpItemAbbrMatch = { bg = 'NONE', fg = '#569CD6', bold = true },
  CmpItemAbbrMatchFuzzy = { bg = 'NONE', fg = '#569CD6', bold = true },

  -- light blue
  CmpItemKindVariable = { bg = 'NONE', fg = '#9CDCFE' },
  CmpItemKindInterface = { bg = 'NONE', fg = '#9CDCFE' },
  CmpItemKindText = { bg = 'NONE', fg = '#9CDCFE' },

  -- pink
  CmpItemKindFunction = { bg = 'NONE', fg = '#C586C0' },
  CmpItemKindMethod = { bg = 'NONE', fg = '#C586C0' },

  -- front
  CmpItemKindKeyword = { bg = 'NONE', fg = '#D4D4D4' },
  CmpItemKindProperty = { bg = 'NONE', fg = '#D4D4D4' },
  CmpItemKindUnit = { bg = 'NONE', fg = '#D4D4D4' },
}

function M.set_groups()
  for k, v in pairs(M.highlight_groups) do
    vim.api.nvim_set_hl(0, k, v)
  end
end

return M
