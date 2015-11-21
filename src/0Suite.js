var Suite = (function() {
  var output = ""
  var failures = 0
  var tests = 0

  var testMap = []

  var test = function(info, fn) {
    tests++
    testMap.push({info: info, fn: fn})
  }

  var error = function(msg) {
    output += "\tERROR: " + msg + "\n"
    failures++
  }

  var run = function() {
    output = ""

    for (var i = 0; i < testMap.length; i++) {
      output += "\n" + testMap[i].info + ":\n"
      testMap[i].fn(Suite)
    }

    return output + "\n\nTests: " + tests + ", failures: " + failures + "\n"
  }

  return {
    test: test,
    error: error,
    run: run,
  }
}())

