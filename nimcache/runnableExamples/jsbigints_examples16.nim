#[
autogenerated by docgen
loc: /home/runner/work/Nim/Nim/lib/std/jsbigints.nim(111, 3)
rdoccmd: 
]#
import "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim"
doAssert big"2" ** big"64" == big"18446744073709551616"
doAssert big"-2" ** big"3" == big"-8"
doAssert -big"2" ** big"2" == big"4" # parsed as: (-2n) ** 2n
doAssert big"0" ** big"0" == big"1" # edge case
var ok = false
try: discard big"2" ** big"-1" # raises foreign `RangeError`
except: ok = true
doAssert ok
