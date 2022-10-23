local function get_color(group)
  local colors = vim.api.nvim_get_hl_by_name(group, true)

  return {
    fg = colors.foreground and string.format('#%06x', colors.foreground) or '',
    bg = colors.background and string.format('#%06x', colors.background) or '',
  }
end

local M = {
  bg = get_color('StatusLine').bg,
  fg = get_color('StatusLine').fg,
  yellow = get_color('Yellow').fg,
  cyan = get_color('Aqua').fg,
  darkblue = get_color('Identifier').fg,
  green = get_color('Green').fg,
  orange = get_color('Constant').fg,
  violet = '#a9a1e1',
  magenta = get_color('Purple').fg,
  blue = get_color('Blue').fg,
  red = get_color('Red').fg,
}

return M
