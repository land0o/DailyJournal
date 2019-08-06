// dom selector from html
// let journalDom = document.querySelector(".entryLog");

// insert into the html
const journalDomRender = (location, HtmlInsert) => {
  location.innerHTML += HtmlInsert;
};
export default journalDomRender;
