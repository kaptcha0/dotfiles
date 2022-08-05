local M = {}

-- Merge 2 or more tables together
-- Later tables will override earlier ones
-- @param ... table[]
-- @return table
function M.merge(...)
  local result = {}

  for i, tbl in ipairs({ ... }) do
    for k, v in pairs(tbl) do
      if type(k) ~= 'number' then
        result[k] = v
      else
        result[i] = v
      end
    end
  end

  return result
end

-- Joins path segments with no separators in them
-- @param ... string[]
-- @return string
function M.join(...)
  local sep = IS_WINDOWS and '\\' or '/'
  local segments = { ... }
  local path = ''

  for _, segment in ipairs(segments) do
    path = path .. segment .. sep
  end

  path = path:sub(1, #path - 1)

  -- Replace other separators for other systems if possible
  return path:gsub((IS_WINDOWS and '/' or '\\'), sep)
end

return M
