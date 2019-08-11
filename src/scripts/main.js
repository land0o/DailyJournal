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
        entry.Mood,
        entry.id
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
    const postAndRender = () => {
      ApiData.postJournalEntry(journalObj)
        .then(getAndRenderEntries)
        .then(erase => {
          //clears the input fields
          document.getElementById("conceptsCovered").value = "";
          document.getElementById("journalEntry").value = "";
        });
    };
    postAndRender();
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

// delete button
// add an event listner
// collect the value id
// use the id to delete selected id
const articleContainer = document.querySelector(".entryLog");
articleContainer.addEventListener("click", event => {
  console.log("hi");
  if (event.target.id.startsWith("deleteID")) {
    console.log("hi inside");
    const deleteID = event.target.id.split("_")[1];
    console.log("deleteID: ", deleteID);

    ApiData.deleteJournalEntry(deleteID).then(getAndRenderEntries);
    console.log(deleteID);
  }
  // edit button
  else if (event.target.id.startsWith("editId")) {
    console.log("hi inside");
    const editID = event.target.id.split("_")[1];
    console.log("editId: ", editID);
    // ApiData.editJournalEntry(editID).then(postAndRender);
  }
});
