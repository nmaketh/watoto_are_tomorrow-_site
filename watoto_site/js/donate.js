document.addEventListener("DOMContentLoaded", function() {
    var donationForm = document.getElementById("donationForm");

    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var donationAmount = document.getElementById("donationAmount").value;
        var donorName = document.getElementById("donorName").value;
        var donorEmail = document.getElementById("donorEmail").value;

        if (donationAmount && donorName && donorEmail) {
            alert("Thank you, " + donorName + "! Your donation of $" + donationAmount + " has been received.");
            donationForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});