local icons = {
  Text = '', -- Text
  Method = '', -- Method
  Function = '', -- Function
  Constructor = '', -- Constructor
  Field = '', -- Field
  Variable = '', -- Variable
  Class = '', -- Class
  Interface = 'ﰮ', -- Interface
  Module = '', -- Module
  Property = '', -- Property
  Unit = '', -- Unit
  Value = '', -- Value
  Enum = '', -- Enum
  Keyword = '', -- Keyword
  Snippet = '﬌', -- Snippet
  Color = '', -- Color
  File = '', -- File
  Reference = '', -- Reference
  Folder = '', -- Folder
  EnumMember = '', -- EnumMember
  Constant = '', -- Constant
  Struct = '', -- Struct
  Events = '', -- Event
  Operator = 'ﬦ', -- Operator
  TypeParameter = '', -- TypeParameter
}

vim.g.coq_settings = {
  keymap = { 
    recommended = true,
    jump_to_mark = '',
    pre_select = true,
  },
  auto_start = 'shut-up',
  display = {
    icons = {
      mode = 'short',
      mappings = icons,
    },
  },
}
