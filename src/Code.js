function doGet(e) {
  return ContentService.createTextOutput(Suite.run()).setMimeType(ContentService.MimeType.TEXT)
}
