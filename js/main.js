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
var entryTitle = document.querySelector('#title');
var entryURL = document.querySelector('#url');
var entryNotes = document.querySelector('#note');

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

  if (data.editing) {
    userInputsObj.entryId = data.editing.entryId;
    data.entries[data.editing.entryId - 1] = userInputsObj;
  }
});

window.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < data.entries.length; i++) {
    createJournalEntry(data.entries[i]);
  }
});

ulElement.addEventListener('click', function (event) {
  var editIcon = document.querySelectorAll('i');
  for (var i = 0; i < editIcon.length; i++) {
    if (event.target === editIcon[i]) {
      divEntries.setAttribute('class', 'hidden');
      divForm.removeAttribute('class');
      data.view = 'entry-form';

      data.editing = data.entries[i];

      entryTitle.value = data.editing.title;
      entryURL.value = data.editing.photoURL;
      entryNotes.value = data.editing.notes;
      img.src = data.editing.photoURL;
    }
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
  var editIcon = document.createElement('i');
  var divEntriesHead = document.createElement('div');

  divRow.setAttribute('class', 'row');
  imgEntry.setAttribute('class', 'column-half');
  imgEntry.setAttribute('src', entry.photoURL);
  divCol.setAttribute('class', 'column-half');
  divInputs.setAttribute('class', 'form-inputs');
  titleEntry.setAttribute('class', 'title');
  editIcon.setAttribute('class', 'fa-solid fa-pen');
  divEntriesHead.setAttribute('class', 'entries-head');

  titleEntry.textContent = entry.title;
  notesEntry.textContent = entry.notes;

  ulElement.appendChild(listElement);
  listElement.appendChild(divRow);
  divRow.appendChild(imgEntry);
  divRow.appendChild(divCol);
  divCol.appendChild(divInputs);
  divInputs.appendChild(divEntriesHead);
  divEntriesHead.appendChild(titleEntry);
  divEntriesHead.appendChild(editIcon);
  divInputs.appendChild(notesEntry);

  return listElement;
}
