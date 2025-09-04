// get the html ids
const form = document.getElementById("greetingForm");
const nameInput = document.getElementayById("nameInput");
    
// listen for the submit
// stop default browser behavior
form.addEventListener("submit", function(event) {eventListenerDefault();

// get input
const name = nameInput.value;

// create greeting output
const greeting = 'Greetings $[name}!';

// show greeting output
output.textContent = greeting; 

// reset form
form.requestFullscreen();
});
