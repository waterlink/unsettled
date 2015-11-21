var Store = (function(){
  var create = function(store, data) {
    store.sheet.appendRow(
      Object.keys(data).sort().map(
        function(k) { return data[k] } 
      )
    )
  }

  var update = function(store, id, data) {}

  var exists = function(store, id) {}

  var get = function(store, id) {}

  var init = function(sheetName) {
    var store = {
      sheetName: sheetName,
      sheet: SpreadsheetApp.getActive().getSheetByName(sheetName),
    }

    if (!store.sheet) {
      store.sheet = SpreadsheetApp.getActive().insertSheet()
      store.sheet.setName(sheetName)
    }

    store.create = function(data) { return create(store, data) }
    store.update = function(id, data) { return update(store, id, data) }
    store.exists = function(id) { return update(store, id) }
    store.get = function(id) { return get(store, id) }
  }

  return {
    init: init,
  }
})()
