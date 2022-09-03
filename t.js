const fs = require('fs'); 
const fsPromises = require('fs').promises;
  
fsPromises.copyFile("favicon.png", "textutilis/public/logo512.png")
.then(function() {
  console.log("File Copied");
})
.catch(function(error) {
  console.log(error);
});