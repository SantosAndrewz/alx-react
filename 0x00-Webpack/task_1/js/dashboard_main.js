import $ from "jquery";
import _ from "lodash";

//adding elements to the body
$(document).ready(() => {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button id='button-1' >Click here to get started</button>");
  $("body").append("<p id='count'></p>");
  $("body").append("<p>Copyright - Holberton School</p>");

  let count = 0;
  
  function updateCounter() {
    count += 1;
    $( "#count" ).text(`${count} clicks on the button`);
}

  $( "#button-1" ).on('click', _.debounce(updateCounter, 500, {leading: true, trailing: false}));
});
