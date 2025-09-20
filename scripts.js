document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;
    let rooms = document.getElementById('rooms').value;

    alert(`Thank you, ${name}! Your booking has been received. We will send a confirmation email to ${email}.`);
});
