def json2header:
  [paths(scalars)];

def json2array($header):
  json2header as $h
  | if $h == $header or (($h|sort) == ($header|sort))
    then [$header[] as $p | getpath($p)]
    else "headers do not match: expected followed by found paths:" | debug
    | ($header|map(join(".")) | debug)
    | ($h|map(join(".")) | debug)
    | "headers do not match" | error
    end ;

def inputs2csv:
  json2header as $h
  | [$h[]|join(".")],
    json2array($h),
    (inputs|json2array($h))
  | @csv ;

# `main`
inputs2csv
