if IS_WINDOWS or IS_WSL then
  require('nvim.os.windows')
else
  require('nvim.os.unix')
end
