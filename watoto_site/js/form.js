document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your interest in volunteering! We will get back to you soon.');
    this.reset();
});

document.getElementById('partnerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your interest in partnering with us! We will get back to you soon.');
    this.reset();
});