// dom selectors
const hiddenDomEdit = document.querySelector("#hiddenEditFieldId");
const DomTitle = document.querySelector("#conceptsCovered");
const DomEntry = document.querySelector("#journalEntry");
const DomDate = document.querySelector("#journalDate");
const DomMood = document.querySelector("#mood");

// Fetch data from the API
const ApiData = {
  getJournalEntries: function() {
    return (
      fetch("http://localhost:3000/journalEntries?_sort=id&_order=desc", {
        cache: "no-cache"
      })
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
      body: JSON.stringify(journal),
      cache: "no-cache"
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
  updateJournalEntry(entryID) {
    return fetch(`http://localhost:3000/journalEntries/${entryID}`, {
      cache: "no-cache"
    })
      .then(response => response.json())
      .then(edit => {
        DomDate.value = edit.JournalDate;
        hiddenDomEdit.value = edit.id;
        DomTitle.value = edit.ConceptsCovered;
        DomEntry.value = edit.JournalEntry;
        DomMood.value = edit.Mood;
      });
  },
  editJournalEntry(journalObj, editID) {
    return fetch(`http://localhost:3000/journalEntries/${editID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalObj),
      cache: "no-cache"
    }).then(response => response.json());
  }
};

export default ApiData;
