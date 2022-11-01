/**  takes an agruments as a cat breed and returns some description about that breed*/ 
const myArgs = process.argv.slice(2);
const request = require('request');
const breedFetcher = (breed) =>{
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if(error){
    console.log(error);
    return
  }
  const data = JSON.parse(body);
  if(data.length === 0){
    console.log(`${breed} does not exist`);
    return 
  }
  console.log(data[0].description);
  console.log(typeof data);
  
});
}

breedFetcher(myArgs[0]);