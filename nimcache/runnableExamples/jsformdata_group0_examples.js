/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555897 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555066 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555148 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555147 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555095 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555096 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555107 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI33555107 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555107.node = NNI33555107;
var NNI33555096 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555096.node = NNI33555096;
NTI33555147.base = NTI33555095;
NTI33555148.base = NTI33555095;
var NNI33555095 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555147, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555148, name: "up", sons: null}]};
NTI33555095.node = NNI33555095;
var NNI33555066 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555066.node = NNI33555066;
NTI33555095.base = NTI33555066;
NTI33555096.base = NTI33555095;
NTI33555107.base = NTI33555096;
var NNI33555897 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555897.node = NNI33555897;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557146, src_33557147, ti_33557148) {
  var result_33557157 = null;

    switch (ti_33557148.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557137(ti_33557148))) {
      result_33557157 = src_33557147;
      }
      else {
        result_33557157 = [src_33557147[0], src_33557147[1]];
      }
      
      break;
    case 19:
            if (dest_33557146 === null || dest_33557146 === undefined) {
        dest_33557146 = {};
      }
      else {
        for (var key in dest_33557146) { delete dest_33557146[key]; }
      }
      for (var key in src_33557147) { dest_33557146[key] = src_33557147[key]; }
      result_33557157 = dest_33557146;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557148.base == null))) {
      result_33557157 = nimCopy(dest_33557146, src_33557147, ti_33557148.base);
      }
      else {
      if ((ti_33557148.kind == 17)) {
      result_33557157 = (dest_33557146 === null || dest_33557146 === undefined) ? {m_type: ti_33557148} : dest_33557146;
      }
      else {
        result_33557157 = (dest_33557146 === null || dest_33557146 === undefined) ? {} : dest_33557146;
      }
      }
      nimCopyAux(result_33557157, src_33557147, ti_33557148.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557147 === null) {
        result_33557157 = null;
      }
      else {
        if (dest_33557146 === null || dest_33557146 === undefined) {
          dest_33557146 = new Array(src_33557147.length);
        }
        else {
          dest_33557146.length = src_33557147.length;
        }
        result_33557157 = dest_33557146;
        for (var i = 0; i < src_33557147.length; ++i) {
          result_33557157[i] = nimCopy(result_33557157[i], src_33557147[i], ti_33557148.base);
        }
      }
    
      break;
    case 28:
            if (src_33557147 !== null) {
        result_33557157 = src_33557147.slice(0);
      }
    
      break;
    default: 
      result_33557157 = src_33557147;
      break;
    }

  return result_33557157;

}

function makeNimstrLit(c_33556804) {
      var result = [];
  for (var i = 0; i < c_33556804.length; ++i) {
    result[i] = c_33556804.charCodeAt(i);
  }
  return result;
  

  
}

function arrayConstr(len_33557185, value_33557186, typ_33557187) {
        var result = new Array(len_33557185);
    for (var i = 0; i < len_33557185; ++i) result[i] = nimCopy(null, value_33557186, typ_33557187);
    return result;
  

  
}

function cstrToNimstr(c_33556807) {
      var ln = c_33556807.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556807.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556807.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556810) {
                    var Temporary5;
            var Temporary7;

  var result_33556811 = null;

    var res_33556845 = newSeq_33556828((s_33556810).length);
    var i_33556846 = 0;
    var j_33556847 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556846 < (s_33556810).length)) break Label2;
          var c_33556848 = s_33556810[i_33556846];
          if ((c_33556848 < 128)) {
          res_33556845[j_33556847] = String.fromCharCode(c_33556848);
          i_33556846 += 1;
          }
          else {
            var helper_33556860 = newSeq_33556828(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556861 = c_33556848.toString(16);
                  if ((((code_33556861) == null ? 0 : (code_33556861).length) == 1)) {
                  helper_33556860.push("%0");;
                  }
                  else {
                  helper_33556860.push("%");;
                  }
                  
                  helper_33556860.push(code_33556861);;
                  i_33556846 += 1;
                    if (((s_33556810).length <= i_33556846)) Temporary5 = true; else {                      Temporary5 = (s_33556810[i_33556846] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556848 = s_33556810[i_33556846];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556845[j_33556847] = decodeURIComponent(helper_33556860.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556845[j_33556847] = helper_33556860.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556847 += 1;
        }
    } while (false);
    if (res_33556845.length < j_33556847) { for (var i = res_33556845.length ; i < j_33556847 ; ++i) res_33556845.push(null); }
               else { res_33556845.length = j_33556847; };
    result_33556811 = res_33556845.join("");

  return result_33556811;

}

function raiseException(e_33556671, ename_33556672) {
    e_33556671.name = ename_33556672;
    if ((excHandler == 0)) {
    unhandledException(e_33556671);
    }
    
    e_33556671.trace = nimCopy(null, rawWriteStackTrace_33556635(), NTI33554439);
    throw e_33556671;

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsformdata.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557137(ti_33557138) {
  var result_33557139 = false;

  BeforeRet: do {
    result_33557139 = !((ConstSet1[ti_33557138.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557139;

}

function nimCopyAux(dest_33557150, src_33557151, n_33557152) {
    switch (n_33557152.kind) {
    case 0:
      break;
    case 1:
            dest_33557150[n_33557152.offset] = nimCopy(dest_33557150[n_33557152.offset], src_33557151[n_33557152.offset], n_33557152.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557152.sons.length; i++) {
      nimCopyAux(dest_33557150, src_33557151, n_33557152.sons[i]);
    }
    
      break;
    case 3:
            dest_33557150[n_33557152.offset] = nimCopy(dest_33557150[n_33557152.offset], src_33557151[n_33557152.offset], n_33557152.typ);
      for (var i = 0; i < n_33557152.sons.length; ++i) {
        nimCopyAux(dest_33557150, src_33557151, n_33557152.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556412(x_33556413, x_33556413_Idx, y_33556414) {
          if (x_33556413[x_33556413_Idx] === null) { x_33556413[x_33556413_Idx] = []; }
      var off = x_33556413[x_33556413_Idx].length;
      x_33556413[x_33556413_Idx].length += y_33556414.length;
      for (var i = 0; i < y_33556414.length; ++i) {
        x_33556413[x_33556413_Idx][off+i] = y_33556414.charCodeAt(i);
      }
    

  
}

function auxWriteStackTrace_33556547(f_33556548) {
          var Temporary3;

  var result_33556549 = [[]];

    var it_33556557 = f_33556548;
    var i_33556558 = 0;
    var total_33556559 = 0;
    var tempFrames_33556560 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555897);
    Label1: do {
        Label2: while (true) {
          if (!!((it_33556557 == null))) Temporary3 = false; else {            Temporary3 = (i_33556558 <= 63);          }        if (!Temporary3) break Label2;
          tempFrames_33556560[i_33556558].Field0 = it_33556557.procname;
          tempFrames_33556560[i_33556558].Field1 = it_33556557.line;
          tempFrames_33556560[i_33556558].Field2 = it_33556557.filename;
          i_33556558 += 1;
          total_33556559 += 1;
          it_33556557 = it_33556557.prev;
        }
    } while (false);
    Label4: do {
        Label5: while (true) {
        if (!!((it_33556557 == null))) break Label5;
          total_33556559 += 1;
          it_33556557 = it_33556557.prev;
        }
    } while (false);
    result_33556549[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556559 == i_33556558))) {
    result_33556549[0].push.apply(result_33556549[0], makeNimstrLit("("));;
    result_33556549[0].push.apply(result_33556549[0], cstrToNimstr(((total_33556559 - i_33556558)) + ""));;
    result_33556549[0].push.apply(result_33556549[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    Label6: do {
      var j_33556606 = 0;
      var colontmp__520093731 = 0;
      colontmp__520093731 = (i_33556558 - 1);
      var res_520093733 = colontmp__520093731;
      Label7: do {
          Label8: while (true) {
          if (!(0 <= res_520093733)) break Label8;
            j_33556606 = res_520093733;
            result_33556549[0].push.apply(result_33556549[0], cstrToNimstr(tempFrames_33556560[j_33556606].Field2));;
            if ((0 < tempFrames_33556560[j_33556606].Field1)) {
            result_33556549[0].push.apply(result_33556549[0], makeNimstrLit("("));;
            result_33556549[0].push.apply(result_33556549[0], cstrToNimstr((tempFrames_33556560[j_33556606].Field1) + ""));;
            if (false) {
            result_33556549[0].push.apply(result_33556549[0], makeNimstrLit(", "));;
            result_33556549[0].push.apply(result_33556549[0], makeNimstrLit("0"));;
            }
            
            result_33556549[0].push.apply(result_33556549[0], makeNimstrLit(")"));;
            }
            
            result_33556549[0].push.apply(result_33556549[0], makeNimstrLit(" at "));;
            add_33556412(result_33556549, 0, tempFrames_33556560[j_33556606].Field0);
            result_33556549[0].push.apply(result_33556549[0], makeNimstrLit("\x0A"));;
            res_520093733 -= 1;
          }
      } while (false);
    } while (false);

  return result_33556549[0];

}

function rawWriteStackTrace_33556635() {
  var result_33556636 = [];

    if (!((framePtr == null))) {
    result_33556636 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556547(framePtr) || []), NTI33554439);
    }
    else {
      result_33556636 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556636;

}

function newSeq_33556828(len_33556830) {
  var result_33556831 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 676;
    result_33556831 = new Array(len_33556830); for (var i = 0 ; i < len_33556830 ; ++i) { result_33556831[i] = null; }  framePtr = F.prev;

  return result_33556831;

}

function unhandledException(e_33556667) {
    var buf_33556668 = [[]];
    if (!(((e_33556667.message).length == 0))) {
    buf_33556668[0].push.apply(buf_33556668[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556668[0].push.apply(buf_33556668[0], e_33556667.message);;
    }
    else {
    buf_33556668[0].push.apply(buf_33556668[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556668[0].push.apply(buf_33556668[0], makeNimstrLit(" ["));;
    add_33556412(buf_33556668, 0, e_33556667.name);
    buf_33556668[0].push.apply(buf_33556668[0], makeNimstrLit("]\x0A"));;
    buf_33556668[0].push.apply(buf_33556668[0], rawWriteStackTrace_33556635());;
    var cbuf_33556669 = toJSStr(buf_33556668[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556669);
  }
  else {
    throw cbuf_33556669;
  }
  

  
}

function sysFatal_218103844(message_218103847) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103847, NTI33554439), m_type: NTI33555107, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_218103842(msg_218103843) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 29;
    sysFatal_218103844(msg_218103843);
  framePtr = F.prev;

  
}

function failedAssertImpl_218103866(msg_218103867) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 39;
    raiseAssert_218103842(msg_218103867);
  framePtr = F.prev;

  
}
var F = {procname: "module jsformdata_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples1.nim", line: 0};
framePtr = F;
F.line = 7;
var data_520093698 = new FormData();
F.line = 8;
data_520093698.set("key0", "value0");
F.line = 9;
data_520093698.append("key1", "value1");
F.line = 10;
data_520093698.delete("key1");
if (!(data_520093698.has("key0"))) {
F.line = 11;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples1.nim(11, 8) `data.hasKey(\"key0\")` "));
}

if (!((data_520093698.get("key0") == "value0"))) {
F.line = 12;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples1.nim(12, 8) `data[\"key0\"] == \"value0\".cstring` "));
}

F.line = 13;
(() => { const frmdt = data_520093698; Array.from(frmdt.keys()).forEach((key) => frmdt.delete(key)) })();
if (!((Array.from(data_520093698.entries()).length == 0))) {
F.line = 14;
failedAssertImpl_218103866(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples1.nim(14, 8) `data.len == 0` "));
}

framePtr = F.prev;
var F = {procname: "module jsformdata_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsformdata_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsformdata_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;