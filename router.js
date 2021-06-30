const homeHandler = require("./handler/home");
const publicHandler = require("./handler/public");
const missingHandler = require("./handler/missing");
const autocompleteHandler = require("./handler/autocomplete");


function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("media")) {
    publicHandler(request, response);
  } else if(url === "/autocomplete"){
    autocompleteHandler(request, response);
  }else{
    missingHandler(request, response);
  }
}

module.exports = router;

