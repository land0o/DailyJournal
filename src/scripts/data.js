// Fetch data from the API
const ApiData = {
  getJournalEntries: function() {
    return (
      fetch("http://localhost:3000/journalEntries")
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
  }
};

export default ApiData;
