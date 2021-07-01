/***********************  A WAY TO THINK **********************/
// decleare vars
// add event listener
// fetch json word dictionary
// loop on words that match
// make a connection between back-end and the front-end

const div1 = document.getElementById("proprty");
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
        // let result = element.map(({ name }) => name)
        option.value= element.Name;
        console.log(option.value);
        console.log(element.Name);
        option.id="optionbar";
        option.className="optionbar";
        console.log(option.value);
        op.appendChild(option);
        if(input.value==element.Name)
        {
          create(element);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

function create(a)
{
  var element = [5];
  for(let i=0; i < 5 ;i++)
  {
    element[i]=document.createElement("label");
    // element[i].id=`ele${i}`;
  }
  element[0].textcontent=a.Name;
  element[1].textcontent=a.Miles_per_Gallon;
  element[2].textcontent=a.Horsepower;
  element[3].textcontent=a.Year;
  element[4].textcontent=a.Origin;
  
  for(let i=0; i < 5 ;i++)
  {
    div1.appendChild(element[i]);
  }
}
