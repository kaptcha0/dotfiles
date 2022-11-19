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
  yellow = get_color('WarningMsg').fg,
  cyan = get_color('SpecialKey').fg,
  darkblue = get_color('Identifier').fg,
  green = get_color('String').fg,
  orange = get_color('Constant').fg,
  violet = get_color('Todo').fg,
  magenta = get_color('Todo').fg,
  blue = get_color('Function').fg,
  red = get_color('ErrorMsg').fg,
}

return M
