const suggestions = [
    "MetroPark Solution",
    "Smart Parking System",
    "IoT-based Parking",
    "Real-time Slot Booking",
    "QR Code Parking Access",
    "Metro Station Parking",
    "Seamless Parking Experience",
    "Contactless Payments"
];

// Function to show live suggestions
function showSuggestions() {
    const input = document.getElementById('search').value.toLowerCase();
    const suggestionBox = document.getElementById('suggestions');

    // Clear previous suggestions
    suggestionBox.innerHTML = "";

    // Filter suggestions based on input
    const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(input));

    // Display suggestions in the suggestion box
    filteredSuggestions.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;

        // Add click functionality to populate the search box with the suggestion
        li.onclick = () => {
            document.getElementById('search').value = item;
            suggestionBox.innerHTML = ""; // Clear suggestions after selection
        };

        suggestionBox.appendChild(li);
    });

    // Handle case when no suggestions match
    if (filteredSuggestions.length === 0 && input !== "") {
        const noResult = document.createElement('li');
        noResult.textContent = "No suggestions found.";
        suggestionBox.appendChild(noResult);
    }
}
