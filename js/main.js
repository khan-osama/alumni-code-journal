/* global data */
/* exported data */
var imgURL = document.querySelector('#url');
var img = document.querySelector('img');
var entryForm = document.querySelector('#entry-form');

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
