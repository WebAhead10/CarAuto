/***********************  A WAY TO THINK **********************/ 
// decleare vars
// add event listener
// fetch json word dictionary
// loop on words that match 
// make a connection between back-end and the front-end 

const div = document.createElement("div");
const input = document.getElementById("textInput");

input.addEventListener('input', (event) => {
    fetch("/autocomplete", {
        method : "POST",
        body: JSON.stringify(event.target.value)
    })
    .then((response) => {
        response.json();
    })
    .then(() =>{
        // complete here.
    })
    .catch((err) =>{
        console.log(err);
    })
});
