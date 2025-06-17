// const form = document.getElementById('event-form');
// const eventList = document.getElementById('event-list');

// // Cargar eventos desde Local Storage al cargar la página
// document.addEventListener('DOMContentLoaded', loadEvents);

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const name = document.getElementById('event-name').value;
//   const date = document.getElementById('event-date').value;
//   const location = document.getElementById('event-location').value;

//   const event = { name, date, location };
//   addEventToDOM(event);
//   saveEvent(event);

//   form.reset();
// });

// function addEventToDOM(event) {
//   const li = document.createElement('li');
//   li.innerHTML = `
//     <span><strong>${event.date}</strong> - ${event.name} en ${event.location}</span>
//     <button class="delete-btn">Eliminar</button>
//   `;

//   li.querySelector('.delete-btn').addEventListener('click', () => {
//     li.remove();
//     deleteEvent(event);
//   });

//   eventList.appendChild(li);
// }

// function saveEvent(event) {
//   const events = getEvents();
//   events.push(event);
//   localStorage.setItem('shalom-events', JSON.stringify(events));
// }

// function getEvents() {
//   return JSON.parse(localStorage.getItem('shalom-events')) || [];
// }

// function loadEvents() {
//   const events = getEvents();
//   events.forEach(addEventToDOM);
// }

// function deleteEvent(eventToDelete) {
//   const events = getEvents();
//   const updated = events.filter(event =>
//     !(event.name === eventToDelete.name &&
//       event.date === eventToDelete.date &&
//       event.location === eventToDelete.location)
//   );
//   localStorage.setItem('shalom-events', JSON.stringify(updated));
// }
