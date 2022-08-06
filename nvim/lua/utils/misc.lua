local M = {}

-- Merge 2 or more tables together
-- Later tables will override earlier ones
-- @param ... table[]
-- @return table
function M.merge(...)
  local temp = {}
  local index = 1
  local result = {}

  math.randomseed(os.time())

  for i, tbl in ipairs({ ... }) do
    for k, v in pairs(tbl) do
      if type(k) == 'number' then
        -- randomize numeric keys
        k = math.random() * i * k
      end

      temp[k] = v
    end
  end

  for k, v in pairs(temp) do
    if type(k) == 'number' then
      -- Sort numeric keys into order
      if result[index] then
        index = index + 1
      end

      k = index
    end

    result[k] = v
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
    -- Convert separators are '/' by default
    path = path .. segment .. '/'
  end

  path = path:sub(1, #path - 1)

  -- Replace other separators for other systems if possible
  return path:gsub((not IS_WINDOWS and '\\' or '/'), sep)
end

return M
