// import the other js files into main
import ApiData from "./data.js";
import renderJournalEntries from "./factory.js";
import journalDomRender from "./dom.js";
// invoke the journal submisons to the page
const getAndRenderEntries = () => {
  ApiData.getJournalEntries().then(entriesArray => {
    for (const entry of entriesArray) {
      let journalDom = document.querySelector(".entryLog");
      const html = renderJournalEntries(
        entry.JournalDate,
        entry.ConceptsCovered,
        entry.JournalEntry,
        entry.Mood
      );
      journalDomRender(journalDom, html);
    }
  });
};
getAndRenderEntries();

// submit button

document.querySelector(".journal_button").addEventListener("click", event => {
  // stops the form from refreshing
  // event.preventDefault();
  // collect values from form
  let date = document.getElementById("journalDate").value;
  let subject = document.getElementById("conceptsCovered").value;
  let entry = document.getElementById("journalEntry").value;
  let moodOfTheDay = document.getElementById("mood").value;

  const journalObj = {
    JournalDate: date,
    ConceptsCovered: subject,
    JournalEntry: entry,
    Mood: moodOfTheDay
  };
  console.log(journalObj);
  // invoke post function
  ApiData.postJournalEntry(journalObj).then(getAndRenderEntries);
});
