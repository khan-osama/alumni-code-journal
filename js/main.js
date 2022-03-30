/* global data */
/* exported data */
var imgURL = document.querySelector('#img-url');
var img = document.querySelector('img');

imgURL.addEventListener('input', function (event) {
  img.setAttribute('src', imgURL.value);
});
