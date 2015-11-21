function doGet(e) {
  return ContentService.createTextOutput(Suite.run()).setMimeType(ContentService.MimeType.TEXT)
}

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

Suite.test("suite works", function(t) {
  if (2 + 2 != 4) {
    t.error("Expected 2 + 2 to equal 4")
  }
})

Suite.test("multiple tests work too", function(t) {
  if (2 + 3 != 5) {
    t.error("Expected 2 + 3 to equal 5")
  }
})
