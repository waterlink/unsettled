function doGet(e) {
  return ContentService.createTextOutput(Suite.run().output).setMimeType(ContentService.MimeType.TEXT)
}
