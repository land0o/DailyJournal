// dom selectors
const hiddenDomEdit = document.querySelector("#hiddenEditFieldId");
const DomTitle = document.querySelector("#conceptsCovered");
const DomEntry = document.querySelector("#journalEntry");

// Fetch data from the API
const ApiData = {
  getJournalEntries: function() {
    return (
      fetch("http://localhost:3000/journalEntries?_sort=id&_order=desc")
        //parse data
        .then(data => data.json())
    );
  },
  postJournalEntry: function(journal) {
    return fetch("http://localhost:3000/journalEntries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journal)
    }).then(response => response.json());
  },
  filterJournalEntries(radioValue) {
    return fetch(
      `http://localhost:3000/journalEntries?Mood=${radioValue}`
    ).then(entries => entries.json());
  },
  deleteJournalEntry(deleteID) {
    return fetch(`http://localhost:3000/journalEntries/${deleteID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  editJournalEntry(editID) {
    return fetch(`http://localhost:3000/journalEntries/${editID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editID)
    })
      .then(response => response.json())
      .then(edit => {
        hiddenDomEdit.value = edit.id;
        DomTitle.value = edit.ConceptsCovered;
        DomEntry.value = edit.JournalEntry;
      });
  }
};

export default ApiData;
