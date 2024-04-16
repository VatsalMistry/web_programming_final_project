// JavaScript for flight ticket booking form validation

document.addEventListener("DOMContentLoaded", function () {
    // Selecting the form element
    const form = document.getElementById("booking-form");

    // Adding event listener for form submission
    form.addEventListener("submit", function (event) {
        // Preventing the default form submission behavior
        event.preventDefault();

        // Validating the form fields
        let isValid = true;

        // Checking 'From' and 'To' fields
        const from = document.getElementById("from").value.trim();
        const to = document.getElementById("to").value.trim();
        if (from === "" || to === "") {
            isValid = false;
            alert("Please enter both departure and destination locations.");
            return;
        }

        // Checking departure date
        const departureDate = document.getElementById("departure-date").value;
        if (departureDate === "") {
            isValid = false;
            alert("Please select a departure date.");
            return;
        }

        // Checking return date for round trip
        const tripType = document.querySelector('input[name="trip-type"]:checked').value;
        if (tripType === "round-trip") {
            const returnDate = document.getElementById("return-date").value;
            if (returnDate === "") {
                isValid = false;
                alert("Please select a return date for round trip.");
                return;
            }
        }

        // Checking number of adults
        const adults = document.getElementById("adults").value;
        if (adults < 1) {
            isValid = false;
            alert("Please enter at least 1 adult passenger.");
            return;
        }

        // Checking number of children
        const children = document.getElementById("children").value;
        if (children < 0) {
            isValid = false;
            alert("Number of children cannot be negative.");
            return;
        }

        // If all validations passed, Checking for Tickets
        if (isValid) {
            alert("Checking for Tickets..........");
            form.submit();
        }
    });
});
