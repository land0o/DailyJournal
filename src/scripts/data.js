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
  }
};

export default ApiData;
