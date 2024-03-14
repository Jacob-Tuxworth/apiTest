// Create a function that returns a promise to fetch data from an API
function fetchDataFromAPI(url) {
    return new Promise((resolve, reject) => {
      // Use the Fetch API to make a GET request to the specified URL
      fetch(url)
        .then(response => {
          // Check if the response is successful (status code 200)
          if (response.ok) {
            // Parse the JSON response
            return response.json();
          } else {
            // If the response is not successful, reject the promise with an error message
            throw new Error('Failed to fetch data from API');
          }
        })
        .then(data => {
          // If the JSON data is successfully parsed, resolve the promise with the data
          resolve(data);
        })
        .catch(error => {
          // If any error occurs during the fetch operation, reject the promise with the error message
          reject(error);
        });
    });
  }

  function fetchPokemonData(pokemonName) {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName; // Example API URL
    return fetchDataFromAPI(apiUrl)
      .then(data => {
        // Handle the fetched data
        return data;
      })
      .catch(error => {
        // Handle any errors that occur during the fetch operation
        return error;
      });
  }
  
  // Example usage:
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'; // Example API URL
  fetchDataFromAPI(apiUrl)
    .then(data => {
      // Handle the fetched data
      console.log('Data from API:', data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch operation
      console.error('Error fetching data:', error);
    });