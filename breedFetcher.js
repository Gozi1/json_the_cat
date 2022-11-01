// takes an agruments as a cat breed and returns some description about that breed 
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if(error){
    callback(error,null);
    return
  }
  const data = JSON.parse(body);
  if(data.length === 0){
    callback(error,`The ${breedName} does not exist`);
    return 
  }
  callback(error,data[0].description);
});
};



module.exports = {fetchBreedDescription};