// dom selector from html
let journalDom = document.querySelector(".entryLog");
// insert into the html
const journalDomRender = HtmlInsert => {
  journalDom.innerHTML += HtmlInsert;
};
