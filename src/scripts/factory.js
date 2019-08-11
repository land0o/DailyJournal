// renders journal info from api to readable html

const renderJournalEntries = (
  JournalDate,
  ConceptsCovered,
  JournalEntry,
  Mood,
  id
) => {
  return `
            <div class="journal-card">
            <h2>${JournalDate}</h2>
            <h3>${ConceptsCovered}</h3>
            <aside>${JournalEntry}</aside>
            <h4>Mood: ${Mood}</h4>
            <button class="journal_delete">
            <i id="deleteID_${id}" class="fas fa-trash-alt"></i>
        </button>
            <button class="journal_edit">
            <i id="editId_${id}" class="fas fa-pencil-alt"></i>
        </button>
            </div>
        `;
};
export default renderJournalEntries;
