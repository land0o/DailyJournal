// import the other js files into main
import ApiData from "./data.js";
import renderJournalEntries from "./factory.js";
import journalDomRender from "./dom.js";
// selectors
const journalDom = document.querySelector(".entryLog");
const hiddenDomEdit = document.querySelector("#hiddenEditFieldId");
let date = document.getElementById("journalDate");
let subject = document.getElementById("conceptsCovered");
let entry = document.getElementById("journalEntry");
let moodOfTheDay = document.getElementById("mood");

// invoke the journal submisons to the page
const getAndRenderEntries = () => {
  ApiData.getJournalEntries().then(entriesArray => {
    journalDom.innerHTML = "";
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

// validation
const validation = () => {
  if (date === "" || subject === "" || entry === "" || moodOfTheDay === "") {
    alert("Please fill out all sections!");
  }
};

// submit button

document.querySelector(".journal_button").addEventListener("click", () => {
  const journalObj = {
    JournalDate: date.value,
    ConceptsCovered: subject.value,
    JournalEntry: entry.value,
    Mood: moodOfTheDay.value
  };
  console.log(journalObj);

  // edit and save
  if (hiddenDomEdit.value !== "") {
    validation();
    ApiData.editJournalEntry(journalObj, hiddenDomEdit.value)
      .then(() => getAndRenderEntries())
      .then((hiddenDomEdit.value = ""));
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

// delete button and edit
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
    ApiData.updateJournalEntry(editID).then(getAndRenderEntries);
  }
});
