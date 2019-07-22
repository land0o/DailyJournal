/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntries = [
    {
        JournalDate: "07/12/2019",
        ConceptsCovered: "JavaScript Objects",
        JournalEntry: 'Today we went over Book 2 Chapter 2 "JavaScript Objects". We practiced objects doing the lighting exercise in the chapter. I understand the difference between objects{} and arrays[]. Also learned about Dot and Bracket notation',
        Mood: "Meh"
    },
    {
        JournalDate: "07/12/2019",
        ConceptsCovered: "Querying the Dom",
        JournalEntry: 'Went over the queryselector and how it can be used to change items in the html without writing additional html code. Set up a class in CSS and you are able to manipulate the HTML with Javascript',
        Mood: "Sappy"
    },
    {
        JournalDate: "07/11/2019",
        ConceptsCovered: "Daily Journal",
        JournalEntry: 'Built and styled the 1st part of the daily journal',
        Mood: "Glorious"
    },
    {
        JournalDate: "07/11/2019",
        ConceptsCovered: "Flexbox",
        JournalEntry: 'Went over the Flexbox, and how it can be used to style pages, was able to complete the coffehouse practice!',
        Mood: "Glorious"
    },
    {
        JournalDate: "07/19/2019",
        ConceptsCovered: "API's",
        JournalEntry: "Learned about API's(application program interface). Really cool but a little confusing.",
        Mood: "Meh"
    },
    {
        JournalDate: "07/21/2019",
        ConceptsCovered: "Daily Journal Part 3",
        JournalEntry: 'Completed the 3rd step of the daily journal fairly easy, wrote a function that inserts my html info into the DOM!',
        Mood: "Glorious"
    }

]
const journalEntryArr = []
journalEntryArr.push(journalEntries)

console.log(journalEntryArr)

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
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

// Invoke the render function
renderJournalEntries(journalEntries)

// insert into the html
const journalDom = document.querySelector('.entryLog')

journalEntries.forEach(journalEntries => {
    const insertHtml = renderJournalEntries(journalEntries.JournalDate, journalEntries.ConceptsCovered, journalEntries.JournalEntry, journalEntries.Mood)
    journalDom.innerHTML += insertHtml
})