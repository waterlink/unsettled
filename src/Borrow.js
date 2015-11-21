var Borrow = (function() {
  var init = function(friend, amount, createdAt) {
    return {
      friend: friend,
      amount: amount,
      createdAt: createdAt,
    }
  }

  var save = function(store, b) {
    if (b.id && store.exists(b.id)) {
      return store.update(b.id, b)
    }
    return store.create(b)
  }

  var get = function(store, id) {
    return store.get(id)
  }

  return {
    init: init,
    save: save,
    get: get,
  }
}())
