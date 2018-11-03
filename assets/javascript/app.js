/*
Pseudo Code: 

array of topics

search text field

search submit button
  - event.prevent default
  - push text field value into topics array
  - limit number of value in topics array?
    - remove oldest value when new one is added?

function to generate buttons from topics array
  -empty the button-div before re-generating
  -called once on first load
  -called again on search button click

topic buttons
  -generate 10 static gif elements and display in gif-div
  -use radio buttons or data-value to track which button generated the GIFs
    -render this button differently to signal to user it is the source
  - hover & active states

function to generate gif on topic or search button click

GIFs
  -initially static
  -on click change src to animated, see pausing gifs exercise
  -display rating (PG, G etc.) under gif
  -when generating gifs:
    -create gif-container div element
      -append gif to gif-container
      -append rating  "     "
      -append gif-container to gif-div

Additional functionality to try to add afterwards:
  - check mobile responsiveness
  - (more!) button to append 10 new gifs (same search)
  - add gif titles, tags etc.
  - download button for each gif
  - integrate additional api's
  - button to 'star' / 'favorite' individual gifs
    - persists on selection or addition of new topic
    - extra: persists on page reload, (local storage)
*/


