local palette = require('catppuccin.palettes').get_palette()

local function get_color(group)
  local colors = vim.api.nvim_get_hl_by_name(group, true)

  return {
    fg = colors.foreground and string.format('#%06x', colors.foreground) or '',
    bg = colors.background and string.format('#%06x', colors.background) or '',
  }
end

local M = {
  bg = palette.mantle,
  fg = palette.text,
  yellow = palette.yellow,
  cyan = palette.teal,
  blue = palette.blue,
  darkblue = palette.sapphire,
  green = palette.green,
  orange = palette.peach,
  violet = palette.pink,
  magenta = palette.mauve,
  red = palette.red,
}

return M
