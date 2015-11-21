Suite.test("Borrow.init creates new Borrow record", function(t) {
  var now = new Date()
  var actual = JSON.stringify(Borrow.init("John", 40, now))
  var expected = JSON.stringify({friend: "John", amount: 40, createdAt: now})
  if (actual != expected) {
    t.error("Expected " + actual + " to equal " + expected)
  }
})

Suite.test("Borrow.save creates new Borrow record", function(t) {
  var store = {
    create: function(data) { return 1 },
  }

  var now = new Date()
  var b = Borrow.init("John", 40, now)
  var id = Borrow.save(store, b)
  if (id != 1) {
    t.error("Expected " + id + " to equal 1")
  }
})

Suite.test("Borrow.save updates existing Borrow record", function(t) {
  var stuff = null
  var store = {
    exists: function(id) { return id == 1 },
    update: function(id, data) { if (id == 1) { stuff = data } },
    get: function(id) { if (id == 1) { return stuff } }
  }

  var now = new Date()
  var b = Borrow.init("John", 40, now)
  b.id = 1
  Borrow.save(store, b)

  actual = JSON.stringify(Borrow.get(store, 1))
  expected = JSON.stringify(b)
  if (actual != expected) {
    t.error("Expected " + actual + " to equal " + expected)
  }

  b.friend = "John Smith"
  Borrow.save(store, b)
  actual = JSON.stringify(Borrow.get(store, 1))
  expected = JSON.stringify(b)
  if (actual != expected) {
    t.error("Expected " + actual + " to equal " + expected)
  }
})
