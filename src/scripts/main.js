// import the other js files into main
import ApiData from "./data.js";
import renderJournalEntries from "./factory.js";
import journalDomRender from "./dom.js";
const journalDom = document.querySelector(".entryLog");

// invoke the journal submisons to the page
const getAndRenderEntries = () => {
  ApiData.getJournalEntries().then(entriesArray => {
    for (const entry of entriesArray) {
      const html = renderJournalEntries(
        entry.JournalDate,
        entry.ConceptsCovered,
        entry.JournalEntry,
        entry.Mood
      );
      journalDomRender(journalDom, html);
    }
  });
};
getAndRenderEntries();

// submit button

document.querySelector(".journal_button").addEventListener("click", () => {
  // stops the form from refreshing
  // event.preventDefault();
  // collect values from form
  let date = document.getElementById("journalDate").value;
  let subject = document.getElementById("conceptsCovered").value;
  let entry = document.getElementById("journalEntry").value;
  let moodOfTheDay = document.getElementById("mood").value;

  const journalObj = {
    JournalDate: date,
    ConceptsCovered: subject,
    JournalEntry: entry,
    Mood: moodOfTheDay
  };
  console.log(journalObj);
  if (date === "" || subject === "" || entry === "" || moodOfTheDay === "") {
    alert("Please fill out all sections!");
  } else {
    // invoke post function
    ApiData.postJournalEntry(journalObj)
      .then(getAndRenderEntries)
      .then(erase => {
        //clears the input fields
        document.getElementById("conceptsCovered").value = "";
        document.getElementById("journalEntry").value = "";
      });
  }
});

// radio buttons

const radioButton = document.getElementsByName("filterMood");
radioButton.forEach(btn => {
  btn.addEventListener("click", event => {
    const mood = event.target.value;
    let filteredMood = "";

    ApiData.filterJournalEntries(mood).then(filteredData => {
      filteredData.forEach(moodObj => {
        filteredMood += renderJournalEntries(
          moodObj.JournalDate,
          moodObj.ConceptsCovered,
          moodObj.JournalEntry,
          moodObj.Mood
        );
      });
      console.log(filteredData);
      journalDom.innerHTML = filteredMood;
    });

    console.log(mood);
    // ApiData.getJournalEntries()
    //   .then(allEntries => allEntries.filter(entry => entry.Mood === mood))
    //   .then(filteredArray => console.log("filterMethod", filteredArray));
  });
});
