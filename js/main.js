/* global data */
/* exported data */
var imgURL = document.querySelector('#url');
var img = document.querySelector('img');
var entryForm = document.querySelector('#entry-form');
// var ulElement = document.querySelector('ul');

imgURL.addEventListener('input', function () {
  img.setAttribute('src', imgURL.value);
});

entryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var userInputsObj = {
    title: entryForm.elements.title.value,
    photoURL: entryForm.elements.url.value,
    notes: entryForm.elements.note.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId = data.nextEntryId + 1;
  data.entries.push(userInputsObj);

  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  entryForm.reset();
});

// function createJournalEntry() {
//   var listElement = document.createElement('li');
//   var divRow = document.createElement('div');
//   var imgEntry = document.createElement('img');
//   var divCol = document.createElement('div');
//   var divInputs = document.createElement('div');
//   var titleEntry = document.createElement('h2');
//   var notesEntry = document.createElement('p');

//   divRow.setAttribute('class', 'row');
//   imgEntry.setAttribute('class', 'column-half');
//   imgEntry.setAttribute('src', data.entries[0].photoURL);
//   divCol.setAttribute('class', 'column-half');
//   divInputs.setAttribute('class', 'form-inputs');
//   titleEntry.setAttribute('class', 'title');

//   titleEntry.textContent = data.entries[0].title;
//   notesEntry.textContent = data.entries[0].notes;

//   ulElement.appendChild(listElement);
//   listElement.appendChild(divRow);
//   divRow.appendChild(imgEntry);
//   divRow.appendChild(divCol);
//   divCol.appendChild(divInputs);
//   divInputs.appendChild(titleEntry);
//   divInputs.appendChild(notesEntry);

//   return listElement;
// }
