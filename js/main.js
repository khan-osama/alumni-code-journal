/* global data */
/* exported data */
var imgURL = document.querySelector('#url');
var img = document.querySelector('img');
var entryForm = document.querySelector('#entry-form');
var ulElement = document.querySelector('ul');
var entriesNav = document.querySelector('#entry-head');
var divForm = document.querySelector("div [data-view='entry-form'");
var divEntries = document.querySelector("div [data-view='entries'");
var newEntry = document.querySelector('a');
var noEntriesDiv = document.querySelector('#no-entries-row');

if (data.view === 'entries') {
  divEntries.removeAttribute('class');
  divForm.className = 'hidden';
}

if (data.entries.length === 0) {
  noEntriesDiv.className = 'row';
}

imgURL.addEventListener('input', function () {
  img.setAttribute('src', imgURL.value);
});

entriesNav.addEventListener('click', function () {
  divEntries.removeAttribute('class');
  divForm.className = 'hidden';
  data.view = 'entries';
});

newEntry.addEventListener('click', function () {
  divEntries.setAttribute('class', 'hidden');
  divForm.removeAttribute('class');
  data.view = 'entry-form';
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

  createJournalEntry(data.entries[data.entries.length - 1]);
  divEntries.removeAttribute('class');
  divForm.className = 'hidden';
  data.view = 'entries';
  noEntriesDiv.className = 'row hidden';
});

window.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < data.entries.length; i++) {
    createJournalEntry(data.entries[i]);
  }
});

function createJournalEntry(entry) {
  var listElement = document.createElement('li');
  var divRow = document.createElement('div');
  var imgEntry = document.createElement('img');
  var divCol = document.createElement('div');
  var divInputs = document.createElement('div');
  var titleEntry = document.createElement('h2');
  var notesEntry = document.createElement('p');

  divRow.setAttribute('class', 'row');
  imgEntry.setAttribute('class', 'column-half');
  imgEntry.setAttribute('src', entry.photoURL);
  divCol.setAttribute('class', 'column-half');
  divInputs.setAttribute('class', 'form-inputs');
  titleEntry.setAttribute('class', 'title');

  titleEntry.textContent = entry.title;
  notesEntry.textContent = entry.notes;

  ulElement.appendChild(listElement);
  listElement.appendChild(divRow);
  divRow.appendChild(imgEntry);
  divRow.appendChild(divCol);
  divCol.appendChild(divInputs);
  divInputs.appendChild(titleEntry);
  divInputs.appendChild(notesEntry);

  return listElement;
}
