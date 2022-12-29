local palette = require('nightfox.palette').load('carbonfox')

local function get_color(group)
  local colors = vim.api.nvim_get_hl_by_name(group, true)

  return {
    fg = colors.foreground and string.format('#%06x', colors.foreground) or '',
    bg = colors.background and string.format('#%06x', colors.background) or '',
  }
end

local M = {
  bg = palette.bg0,
  fg = palette.fg2,
  yellow = palette.yellow.base,
  cyan = palette.cyan.base,
  blue = palette.blue.base,
  darkblue = palette.blue.dim,
  green = palette.green.base,
  orange = palette.orange.base,
  violet = palette.pink.base,
  magenta = palette.magenta.base,
  red = palette.red.base,
}

return M
