document.getElementById("myPokemonForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value entered in the text input
    var nameInput = document.getElementById("textInput").value;
    let name = nameInput[0].toLowerCase() + nameInput.slice(1);

    fetchPokemonData(name)
        .then(data => {
            // Create image sprite for Pokemon
            let img = document.createElement('img');
            img.src = data.sprites.back_default;
            img.id = 'pokemonImage';

            // Remove existing image if it exists
            let existingImg = document.getElementById('pokemonImage');
            if(existingImg) {
                existingImg.parentNode.removeChild(existingImg);
            }
            

            // Organise Pokemon Abilities
            let abilityOne = data.abilities[0].ability.name;
            let abilityOneUpper = abilityOne[0].toUpperCase() + abilityOne.slice(1);
            // let abilityTwo = data.abilities[1].ability.name;
            // let abilityTwoUpper = abilityTwo[0].toUpperCase() + abilityTwo.slice(1);

            console.log(img.src);

            // Output Pokemon Information
            document.getElementById("pokemonOutput").textContent = "This Pokemon's abilities are: 1) " + 
             abilityOneUpper + " and 2) " + "! Thanks for submitting the form. Here is the image: ";
            document.getElementById('pokemonOutputWidget').appendChild(img);
            console.log(img.src);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Output a paragraph sentence below the form
    
    console.log("Paragraph updated successfully!"); // Debugging statement
});