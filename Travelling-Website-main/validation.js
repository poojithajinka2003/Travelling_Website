function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    var form = document.forms["registrationForm"];
    var firstName = form["firstName"].value.trim();
    var lastName = form["lastName"].value.trim();
    var phoneNumber = form["phoneNumber"].value.trim();
    var passengers = form["passengers"].value.trim();
    var pickUpDate = form["pickUpDate"].value;
    var pickUpTime = form["pickUpTime"].value;
    var address = form["address"].value.trim();
    var destination = form["destination"].value.trim();
    var postalCode = form["postalCode"].value.trim();

   
    if (!firstName || !lastName || !phoneNumber || !passengers || !pickUpDate || !pickUpTime || !address || !destination || !postalCode) {
        alert("All fields must be filled out");
        return false;
    }

    // Validate phone number: exactly 10 digits
    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("Phone number must be exactly 10 digits");
        return false;
    }

    // Validate number of passengers: must be a positive number
    if (isNaN(passengers) || passengers <= 0) {
        alert("Number of passengers must be a positive number");
        return false;
    }

    // Validate postal code: must be a number
    if (!/^\d+$/.test(postalCode)) {
        alert("Postal code must be a number");
        return false;
    }

    // Validate name fields: should not contain numbers
    if (/\d/.test(firstName) || /\d/.test(lastName)) {
        alert("Name fields cannot contain numbers");
        return false;
    }

    // If all validations pass, show the custom modal
    showModal();
    return true;
}

function showModal() {
    document.getElementById("successModal").style.display = "block";
}

function closeModal() {
    document.getElementById("successModal").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("successModal")) {
        closeModal();
    }
}
