vim.o.showtabline = 2
local colors = import('onedark.palette').darker

local theme = {
  fill = { bg = colors.bg1 },
  head = { fg = colors.fg },
  current_tab = { bg = colors.bg2 },
  tab = { bg = colors.bg1 },
  win = { fg = colors.fg },
  tail = { fg = colors.fg },
}

require('tabby.tabline').set(function(line)
  return {
    {
      { '  ', hl = theme.head },
      line.sep(' ', theme.head, theme.fill),
    },
    line.tabs().foreach(function(tab)
      local hl = tab.is_current() and theme.current_tab or theme.tab
      return {
        line.sep('', hl, theme.fill),
        tab.is_current() and '' or '󰆣',
        tab.number(),
        tab.name(),
        tab.close_btn(''),
        line.sep('', hl, theme.fill),
        hl = hl,
        margin = ' ',
      }
    end),
    line.spacer(),
    line.wins_in_tab(line.api.get_current_tab()).foreach(function(win)
      local hl = win.is_current() and theme.current_tab or theme.tab
      return {
        line.sep('', hl, theme.fill),
        win.is_current() and '' or '',
        win.buf_name(),
        line.sep('', hl, theme.fill),
        hl = hl,
        margin = ' ',
      }
    end),
    {
      line.sep(' ', theme.tail, theme.fill),
      { '  ', hl = theme.tail },
    },
    hl = theme.fill,
  }
end)
