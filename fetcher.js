const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);

const fetcher = function () {
  //getting data from http based on first input => input[0]
  request(input[0], (error, response, body) => {
    if(error) return console.log('Website is not available');
    //copying body of the site to the given file
    fs.writeFile(input[1], body, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
  })
}

fetcher();