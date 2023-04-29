local colors = require('catppuccin.palettes')
local theme_colors = colors.get_palette()

local function get_color(group)
  local colors = vim.api.nvim_get_hl_by_name(group, true)

  return {
    fg = colors.foreground and string.format('#%06x', colors.foreground) or '',
    bg = colors.background and string.format('#%06x', colors.background) or '',
  }
end

local M = {
  bg = theme_colors.base,
  fg = theme_colors.text,
  yellow = theme_colors.yellow,
  cyan = theme_colors.teal,
  blue = theme_colors.blue,
  darkblue = theme_colors.sapphire,
  green = theme_colors.green,
  orange = theme_colors.peach,
  violet = theme_colors.lavender,
  magenta = theme_colors.mauve,
  red = theme_colors.red,
}

return M
