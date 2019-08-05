// import the other js files into main
import ApiData from "./data.js";
import renderJournalEntries from "./factory.js";
// invoke the journal submisons to the page

ApiData().then(entriesArray => {
  for (const entry of entriesArray) {
    let journalDom = document.querySelector(".entryLog");
    journalDom.innerHTML += renderJournalEntries(
      entry.JournalDate,
      entry.ConceptsCovered,
      entry.JournalEntry,
      entry.Mood
    );
  }
});

// // submit button

// document.querySelector(".journal_button").addEventListener("click", () => {
//   const journalDom = document.querySelector(".entryLog");
//   //   empty string allows on set of info to be viewed at a time
//   journalDom.innerHTML = "";
//   //   stores value from input field
//   const journalFormSubmissions = document.querySelector(".journalSubmissions")
//     .value;
//   ApiData.getJournalEntries(journalFormSubmissions).then(journalArray => {
//     const journalFormArray = journalArray._embedded.events;
//     journalFormArray.forEach(journal => {
//       const journalRep = renderJournalEntries(journal);
//       journalDomRender(journalRep);
//     });
//   });
// });
