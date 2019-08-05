// Fetch data from the API
const ApiData = {
  getJournalEntries: function() {
    return (
      fetch("http://localhost:3000/journalEntries")
        //parse data
        .then(data => data.json())
    );
  }
};
export default ApiData.getJournalEntries;
