// Prompt: "Why is my page still reloading when I submit this form? Here is a screen shot of Dev Tools breakpoint."
// AI helped me notice an incorrect event.preventDefault()

// get the html ids
const form = document.getElementById("greetingForm");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("greetingOutput");

// listen for the submit
// stop default browser behavior
form.addEventListener("submit", function(event) {
    event.preventDefault();
     console.log("Form submitted") // debug check

// get input
const name = nameInput.value;

// create greeting output
const greeting = `Greetings ${name }!`;

// show greeting output
output.textContent = greeting; 

// reset form
form.reset();
});
