// renders journal info from api to readable html

const renderJournalEntries = (
  JournalDate,
  ConceptsCovered,
  JournalEntry,
  Mood
) => {
  return `
            <div class="journal-card">
            <h2>${JournalDate}</h2>
            <h3>${ConceptsCovered}</h3>
            <aside>${JournalEntry}</aside>
            <h4>Mood: ${Mood}</h4>
            <button class="journal_delete">
          delete me
        </button>
            </div>
        `;
};
export default renderJournalEntries;
