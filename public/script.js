/***********************  A WAY TO THINK **********************/
// decleare vars
// add event listener
// fetch json word dictionary
// loop on words that match
// make a connection between back-end and the front-end

// const div = document.createElement("div");
const input = document.getElementById("searchbar");
const op = document.getElementById("brow");


input.addEventListener("input", (event) => {
  // console.log
  fetch("/autocomplete", {
    method: "POST",
    body: JSON.stringify(event.target.value),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(element => {
        const option = document.createElement("option");
        option.value = element.name;
        option.id="optionbar";
        option.className="optionbar";
        op.appendChild(option);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
