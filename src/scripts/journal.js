// insert into the html
const journalDom = document.querySelector('.entryLog')

// Fetch from the API
fetch("http://localhost:3000/journalEntries")
    // Parse as JSON
    .then(data => data.json())
    // do something with parse data
    .then(entries => {
        // for of loop renders data fetched from the json server to html inside of article with class name entryLog
        for (const entry of entries) {
            journalDom.innerHTML += renderJournalEntries(entry.JournalDate, entry.ConceptsCovered, entry.JournalEntry, entry.Mood)
        }
    })

// Purpose: To render all journal entries to the DOM
const renderJournalEntries = (JournalDate, ConceptsCovered, JournalEntry, Mood) => {
    return `
        <div class="journal-card">
        <h2>${JournalDate}</h2>
        <h3>${ConceptsCovered}</h3>
        <aside>${JournalEntry}</aside>
        <h4>Mood: ${Mood}</h4>
        </div>
    `
}