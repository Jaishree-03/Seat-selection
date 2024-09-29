const seatContainer = document.querySelector('.seat-container');
const selectedSeatsDisplay = document.getElementById('selectedSeats');
let selectedSeats = [];

// Generate 100 seats dynamically
for (let i = 1; i <= 100; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = i;
    seat.addEventListener('click', () => selectSeat(seat, i));
    seatContainer.appendChild(seat);
}

function selectSeat(seat, seatNumber) {
    // Toggle selected class
    seat.classList.toggle('selected');

    // Add or remove seat number from selectedSeats array
    if (seat.classList.contains('selected')) {
        selectedSeats.push(seatNumber);
    } else {
        selectedSeats = selectedSeats.filter(number => number !== seatNumber);
    }

    // Update the selected seats display
    selectedSeatsDisplay.textContent = `Selected Seats: ${selectedSeats.join(', ')}`;
}