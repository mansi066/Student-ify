document.addEventListener("DOMContentLoaded", function() {
    // Get all the cards
    const cards = document.querySelectorAll(".card");

    // Add click event listener to each card
    cards.forEach(function(card, index) {
        card.addEventListener("click", function() {
            // Open the respective HTML file based on the card index
            window.location.href = `/courses/Name${index + 1}.html`;
        });
    });

    // Select the search input and all cards
const searchInput = document.getElementById("searchInput"); // Assume an input field with id 'searchInput'


// Add event listener to the search input
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase(); // Convert query to lowercase for case-insensitive matching
    console.log(query)
  // Loop through each card
  cards.forEach((card) => {
    // Get the card-title element inside the card
    const title = card.querySelector(".card-title").textContent.toLowerCase();

    // Check if the title includes the search query
    if (title.includes(query)) {
      card.style.display = "block"; // Show the card
    } else {
      card.style.display = "none"; // Hide the card
    }
  });
});
});


