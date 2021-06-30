const fs = require("fs");
const path = require("path");
const dataArray = require("../data/data");

function autocompleteHandler(request, response){
    let body = "";
    request.on("data", chunk =>{
        body += chunk;
    });
    request.on("end", () =>{
        const data = JSON.parse(body);

        let car = dataArray.filter(({Name}) =>{
            const result = new RegExp(`^${data}`, 'gi');
            return Name.match(result);
        });
        console.log(car);

        response.writeHead(200, { "content-type": "application/json" });
        response.end(JSON.stringify(car));
    })
}

module.exports = autocompleteHandler;