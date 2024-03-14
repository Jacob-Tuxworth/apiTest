document.getElementById('myChuckForm').addEventListener("submit", function(event) {
    event.preventDefault();

    fetchChuckData().then(data => {
        document.getElementById("chuckOutput").textContent = data.value;
    })
    .catch(error => {
        document.getElementById("chuckOutput").textContent = "Sorry there was an error accessing the API: " + error;
    })
})