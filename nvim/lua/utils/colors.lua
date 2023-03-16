local colors = require('kanagawa.colors').setup()
local palette_colors = colors.palette
local theme_colors = colors.theme

local function get_color(group)
  local colors = vim.api.nvim_get_hl_by_name(group, true)

  return {
    fg = colors.foreground and string.format('#%06x', colors.foreground) or '',
    bg = colors.background and string.format('#%06x', colors.background) or '',
  }
end

local M = {
  bg = theme_colors.ui.bg_dim,
  fg = theme_colors.ui.fg,
  yellow = palette_colors.roninYellow,
  cyan = palette_colors.springBlue,
  blue = palette_colors.dragonBlue,
  darkblue = palette_colors.winterBlue,
  green = palette_colors.waveAqua1,
  orange = palette_colors.lotusOrange2,
  violet = palette_colors.oniViolet,
  magenta = palette_colors.dragonPink,
  red = palette_colors.samuraiRed,
}

return M
