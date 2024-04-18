document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let destination = document.getElementById('destination').value;
    let departureDate = document.getElementById('departureDate').value;
    let returnDate = document.getElementById('returnDate').value;
    let notes = document.getElementById('notes').value;
  
    let itineraryItem = {
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      notes: notes
    };
  
    addToItinerary(itineraryItem);
    clearForm();
  });
  
  function addToItinerary(item) {
    let itineraryList = document.getElementById('itineraryList');
    let li = document.createElement('li');
    li.innerHTML = `
      <strong>Destination:</strong> ${item.destination}<br>
      <strong>Departure Date:</strong> ${item.departureDate}<br>
      <strong>Return Date:</strong> ${item.returnDate}<br>
      <strong>Notes:</strong> ${item.notes}
    `;
    itineraryList.appendChild(li);
  }
  
  function clearForm() {
    document.getElementById('destination').value = '';
    document.getElementById('departureDate').value = '';
    document.getElementById('returnDate').value = '';
    document.getElementById('notes').value = '';
  }
  