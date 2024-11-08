// Function to generate itinerary fields based on start and end date
function generateItinerary() {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    const itineraryContainer = document.getElementById("itinerary-container");
    itineraryContainer.innerHTML = ''; // Clear existing itinerary

    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const daysDiff = Math.ceil((end - start) / (1000 * 3600 * 24)) + 1;

        // Generate itinerary cards for each day
        for (let i = 1; i <= daysDiff; i++) {
            const card = document.createElement("div");
            card.classList.add("itinerary-card");
            card.innerHTML = `
                <div class="day-header">
                    <h3>Day ${i}</h3>
                    <span>Day ${i} Itinerary</span>
                </div>
                <div class="budget-section">
                    <div class="budget-item">
                        <label for="food-day-${i}">Food</label>
                        <input type="number" id="food-day-${i}" placeholder="Food budget">
                    </div>
                    <div class="budget-item">
                        <label for="accommodation-day-${i}">Accommodation</label>
                        <input type="number" id="accommodation-day-${i}" placeholder="Accommodation budget">
                    </div>
                    <div class="budget-item">
                        <label for="travel-day-${i}">Travel</label>
                        <input type="number" id="travel-day-${i}" placeholder="Travel budget">
                    </div>
                </div>
                <div class="activities-section">
                    <label for="activities-day-${i}">Activities</label>
                    <input type="text" id="activities-day-${i}" placeholder="List activities for the day">
                </div>
                <div class="stuff-section">
                    <label for="stuff-day-${i}">Stuff to carry</label>
                    <input type="text" id="stuff-day-${i}" placeholder="List stuff to carry">
                </div>
            `;
            itineraryContainer.appendChild(card);
        }
    }
}

// Function to validate the itinerary data
function validateItineraryData(numDays) {
    for (let i = 1; i <= numDays; i++) {
        const food = document.getElementById(`food-day-${i}`).value;
        const accommodation = document.getElementById(`accommodation-day-${i}`).value;
        const travel = document.getElementById(`travel-day-${i}`).value;
        const activities = document.getElementById(`activities-day-${i}`).value.trim();
        const stuff = document.getElementById(`stuff-day-${i}`).value.trim();

        // Check if any budget field is empty or negative
        if (food === "" || Number(food) < 0 || accommodation === "" || Number(accommodation) < 0 || travel === "" || Number(travel) < 0) {
            alert(`Please provide a non-negative budget for all categories on Day ${i}.`);
            return false;
        }

        // Check if activities and stuff fields are empty
        if (!activities || !stuff) {
            alert(`Please provide activities and stuff to carry for Day ${i}.`);
            return false;
        }
    }
    return true;
}

// Function to validate the form before submission
function validateForm() {
    const tripName = document.getElementById("trip-name").value.trim();
    const source = document.getElementById("source").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    // Simple validation checks
    if (!tripName || !source || !destination || !startDate || !endDate) {
        alert("Please fill in all fields.");
        return false;
    }

    if (new Date(startDate) > new Date(endDate)) {
        alert("Start date cannot be after end date.");
        return false;
    }

    const numDays = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24)) + 1;

    // Validate itinerary data
    if (!validateItineraryData(numDays)) {
        return false;
    }

    // If validation passes, store the data
    storeTripData();
    return true;
}

// Function to store trip data
function storeTripData() {
    const tripName = document.getElementById("trip-name").value;
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    const itineraryData = [];
    const numDays = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24)) + 1;

    for (let i = 1; i <= numDays; i++) {
        const food = document.getElementById(`food-day-${i}`).value;
        const accommodation = document.getElementById(`accommodation-day-${i}`).value;
        const travel = document.getElementById(`travel-day-${i}`).value;
        const activities = document.getElementById(`activities-day-${i}`).value;
        const stuff = document.getElementById(`stuff-day-${i}`).value;

        itineraryData.push({
            day: i,
            food,
            accommodation,
            travel,
            activities,
            stuff
        });
    }

    const newTrip = {
        tripName,
        source,
        destination,
        startDate,
        endDate,
        itinerary: itineraryData
    };

    // Retrieve existing trips from localStorage
    const existingTrips = JSON.parse(localStorage.getItem("tripData")) || [];
    
    // Append the new trip to the list of existing trips
    existingTrips.push(newTrip);

    // Store updated list of trips back in localStorage
    localStorage.setItem("tripData", JSON.stringify(existingTrips));

    alert("Trip data saved successfully!");
}

// Function to view saved trips (optional for testing)
function viewSavedTrips() {
    const trips = JSON.parse(localStorage.getItem("tripData")) || [];
    console.log("Saved Trips:", trips);
}
