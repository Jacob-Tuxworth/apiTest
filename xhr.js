// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Prepare the request
// var apiKey = '6ba9ea99979b5ac511884909fc705752';
// var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=' + apiKey;
// var url = proxyUrl + apiUrl;
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

// Configure the request
xhr.open('GET', apiUrl, true);

// Set the Authorization header with the API key
// xhr.setRequestHeader('Authorization', 'APIKey ' + apiKey);

// Set up a callback function to handle the response
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request was successful, handle the response data
      var responseData = JSON.parse(xhr.responseText);
      console.log(responseData.abilities[0].ability.name);
    } else {
      // Request failed, handle the error
      console.error('Request failed: ' + xhr.status);
    }
  }
};

// Send the request
xhr.send();