document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var contactName = document.getElementById("contactName").value;
        var contactEmail = document.getElementById("contactEmail").value;
        var contactMessage = document.getElementById("contactMessage").value;

        if (contactName && contactEmail && contactMessage) {
            alert("Thank you, " + contactName + "! Your message has been sent.");
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});