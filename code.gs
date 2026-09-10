/**
 * The Accordion - Standalone Google Slides Integration
 * Opens a tiny launcher → real about:blank tab with the full chat app.
 */

function onOpen() {
  SlidesApp.getUi()
    .createMenu('Templates')
    .addItem('The Accordion', 'showAccordionLauncher')
    .addToUi();
}

/**
 * Tiny launcher dialog (not the full app).
 */
function showAccordionLauncher() {
  var html = HtmlService.createHtmlOutputFromFile('launcher')
    .setWidth(1180)
    .setHeight(780)
    .setTitle('Free Cookie');
  SlidesApp.getUi().showModalDialog(html, 'Free Cookie');
}

/**
 * Server-side: return the full singlefile.html content so the launcher can inject it.
 */
function getCmdHtml() {
  return HtmlService.createHtmlOutputFromFile('cmd').getContent();
}

function getSinglefileHtml() {
  return HtmlService.createHtmlOutputFromFile('singlefile').getContent();
}
