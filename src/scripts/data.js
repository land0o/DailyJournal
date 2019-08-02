// Fetch data from the API
const ApiData = {
  getJournalEntries: function() {
    return (
      fetch("http://localhost:3000/journalEntries")
        //parse data
        .then(data => data.json())
        .then(entriesArray => {
          for (const entry of entriesArray) {
            let journalDom = document.querySelector(".entryLog");
            journalDom.innerHTML += renderJournalEntries(
              entry.JournalDate,
              entry.ConceptsCovered,
              entry.JournalEntry,
              entry.Mood
            );
          }
        })
    );
  }
};
