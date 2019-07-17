/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = [
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
    }
]
const journalEntries = []
journalEntries.push(journalEntry)

console.log(journalEntries)