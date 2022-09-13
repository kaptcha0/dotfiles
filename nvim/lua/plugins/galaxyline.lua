local gl = require('galaxyline')
local colors = require('utils.colors')
local condition = require('galaxyline.condition')
local gls = gl.section

gl.short_line_list = {'NvimTree','vista','dbui','packer'}

-- Left --

gls.left[1] = {
  EmptySpot = {
    provider = function ()
     return ' '
    end
  }
}

gls.left[2] = {
  ViMode = {
    provider = function()
      -- auto change color according the vim mode
    local mode_color = {n = colors.red, i = colors.green,v=colors.blue,
                          [''] = colors.blue,V=colors.blue,
                          c = colors.magenta,no = colors.red,s = colors.orange,
                          S=colors.orange,[''] = colors.orange,
                          ic = colors.yellow,R = colors.violet,Rv = colors.violet,
                          cv = colors.red,ce=colors.red, r = colors.cyan,
                          rm = colors.cyan, ['r?'] = colors.cyan,
                          ['!']  = colors.red,t = colors.red}

      vim.api.nvim_command('hi GalaxyViMode guifg='..mode_color[vim.fn.mode()])
      return '  '
    end,
    highlight = {colors.red,'bold'},
  },
}

gls.left[3] = {
  FileSize = {
    provider = 'FileSize',
    separator = ' ',
    condition = condition.buffer_not_empty
  },
}

gls.left[4] = {
  FileIcon = {
    provider = 'FileIcon',
    condition = condition.buffer_not_empty,
    highlight = {require('galaxyline.provider_fileinfo').get_file_icon_color},
  }
}

gls.left[5] = {
  FileName = {
    provider = 'FileName',
    conditions = condition.buffer_not_empty,
    highlight = {colors.magenta, 'bold'}
  }
}

gls.left[6] = {
  RoundedEdge = {
    provider = function ()
     return ' '
    end,
    separator = '',
    separator_highlight = { colors.bg }
  }
}

-- Mid --

gls.mid[1] = {
  ShowLspClient = {
    provider = 'GetLspClient',
    condition = function ()
      local tbl = {['dashboard'] = true,['']=true}
      if tbl[vim.bo.filetype] then
        return false
      end
      return true
    end,
    icon = ' LSP: ',
    highlight = {colors.cyan, colors.bg, 'bold'}
  }
}

-- Right --

gls.right[1] = {
  FileFormat = {
    provider = function()
      local format = vim.bo.fileformat

      local icons = {
        dos = '',
        unix = '',
        mac = ''
      }

      return icons[format]
    end,
    condition = condition.hide_in_width,
    separator = ' ',
    separator_highlight = { colors.bg },
    highlight = {colors.green,'bold'}
  }
}

gls.right[2] = {
  FileEncode = {
    provider = function ()
      local encode = vim.bo.fenc ~= '' and vim.bo.fenc or vim.o.enc
      return encode:lower() .. ' '
    end,
    condition = condition.hide_in_width,
    separator = ' | ',
    separator_highlight = {'NONE'},
    highlight = {colors.green, 'bold'}
  }
}

gls.right[3] = {
  VerticalBar = {
    provider = function ()
     return ' | '
    end,
  }
}

gls.right[4] = {
  DiagnosticError = {
    provider = 'DiagnosticError',
    separator = ' ',
    highlight = {colors.red},
    separator_highlight = {colors.red}
  }
}
gls.right[5] = {
  DiagnosticWarn = {
    provider = 'DiagnosticWarn',
    separator = '  ',
    highlight = {colors.yellow},
    separator_highlight = {colors.yellow},
  }
}

gls.right[6] = {
  DiagnosticHint = {
    provider = 'DiagnosticHint',
    separator = '  ',
    highlight = {colors.cyan},
    separator_highlight = {colors.cyan},
  }
}

gls.right[7] = {
  DiagnosticInfo = {
    provider = 'DiagnosticInfo',
    separator = '  ',
    highlight = {colors.blue},
    separator_highlight = {colors.blue},
  }
}

gls.right[8] = {
  LineInfo = {
    provider = function ()
      local line = vim.fn.line('.')
      local column = vim.fn.col('.')
      return string.format("%3d:%2d ", line, column)
    end,
    separator = ' | ',
    separator_highlight = {'NONE'},
    highlight = {colors.fg},
  },
}

-- Short Line --

gls.short_line_left[1] = {
  EmptySpot = {
    provider = function ()
     return ' '
    end
  }
}

gls.short_line_left[2] = {
  BufferType = {
    provider = function ()
      local ft = vim.bo.filetype

      return ft:lower()
    end,
    separator = ' ',
    separator_highlight = {'NONE'},
    highlight = {colors.blue,'bold'}
  }
}

gls.short_line_left[3] = {
  SFileName = {
    provider =  'SFileName',
    condition = condition.buffer_not_empty,
    highlight = {colors.fg,'bold'}
  }
}

gls.short_line_right[1] = {
  BufferIcon = {
    provider= 'BufferIcon',
    highlight = {colors.fg}
  }
}
