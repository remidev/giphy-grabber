
// DOM Elements
var topicInput = $("#topic-input");
var buttonDiv = $("#button-div");
var gifDiv = $("#gif-div")

// Topics Array
var topicsArr = [

  "Cats",
  "Dogs",
  "Birds",
  "Lizards",
  "Rabbits",
  "Snakes",
  "Turtles",
  "Mice",
  "Bats",
  "Frogs"

];


//Function to display gifs
function displayGifs() {

  //clear old gifs
  gifDiv.empty();

  //Retrieve topic from button data
  var topic = $(this).attr("data-topic");

  //Insert topic & apiKey into query URL, limit responses to 10, rating to 'g'
  var apiKey = "&api_key=ZHXmVoaySRYkSgsulnlN1v87PyglzDWz";
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + apiKey + "&limit=10&rating=g"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    //For each of the 10 Gifs returned...
    response.data.forEach(function (element) {

      //create new div to hold gif & gif info
      var gifContainer = $("<div>");

      //store title & rating
      var title = element.title;
      var rating = element.rating;

      //store original & still url 
      var pauseURL = element.images.fixed_height_still.url;
      var playURL = element.images.fixed_height.url;

      //create <p> to hold title
      var pOne = $("<p>").text(title);

      //create <p> to hold rating
      var pTwo = $("<p>").text("Rating: " + rating);

      //creat <img> to hold gif
      var img = $("<img>");

      //append title
      gifContainer.append(pOne);

      //set <img> attributes
      img.attr("src", pauseURL)
      img.attr("data-pause", pauseURL)
      img.attr("data-play", playURL);
      img.attr("data-state", "paused")

      //append <img>
      gifContainer.append(img);

      //append rating
      gifContainer.append(pTwo);

      gifDiv.append(gifContainer);

    })

  });

}


// Submit Button Behavior
$("#topic-submit").on("click", function (event) {
  //Check if input is empty...
  if ($("#topic-input").val() === "") {
    alert("Please enter a topic before hitting submit")
  } else {
    //...If not, generate new topic buttons
    event.preventDefault();
    var topic = $("#topic-input").val();
    //Clear text
    $("#topic-input").val('');
    //Remove 'oldest' topic
    topicsArr.shift();
    topicsArr.push(topic);
    generateButtons();
  }

});


//Topic Button Behavior
$(document).on("click", ".topic-button", displayGifs);

//Function to generate buttons based on topic array contents
function generateButtons() {
  //Clear out old buttons
  buttonDiv.empty();
  //For every element in topics array...
  topicsArr.forEach(function (element) {
    //...Create new topic-button and append
    var topic = element;
    var newBtn = $("<button>");
    newBtn.addClass("topic-button");
    newBtn.attr("data-topic", topic);
    newBtn.text(topic);
    buttonDiv.append(newBtn);

  })
}

//Gif Click Behavior
$(document).on("click", "img", function () {
  //Check then change state, update src and data-state to match
  if ($(this).attr("data-state") === "paused") {
    $(this).attr("src", $(this).attr("data-play"));
    $(this).attr("data-state", "playing");
  } else {
    $(this).attr("src", $(this).attr("data-pause"));
    $(this).attr("data-state", "paused");
  }
});

generateButtons();





