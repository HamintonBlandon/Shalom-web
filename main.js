// Obtenemos el formulario del DOM mediante su ID
const form = document.getElementById('event-form');

// Obtenemos el contenedor de la tabla donde se listarán los eventos
const eventList = document.getElementById('event-list');

// Al cargar completamente el documento HTML, ejecutamos la función que carga los eventos desde localStorage
document.addEventListener('DOMContentLoaded', loadEvents);

// Asociamos una función al evento submit del formulario para manejar la creación de nuevos eventos
form.addEventListener('submit', function(e) {
  // Evita que el formulario se envíe de forma tradicional (recarga la página)
  e.preventDefault();

  // Capturamos los valores introducidos por el usuario en los campos del formulario
  const name = document.getElementById('event-name').value;
  const date = document.getElementById('event-date').value;
  const location = document.getElementById('event-location').value;

  // Creamos un objeto de evento con los datos proporcionados
  const event = { name, date, location };

  // Agregamos visualmente el evento a la tabla
  addEventToTable(event);

  // Guardamos el evento en el almacenamiento local del navegador
  saveEvent(event);

  // Limpiamos el formulario para introducir un nuevo evento
  form.reset();
});

// Función para agregar un evento a la tabla HTML
function addEventToTable(event) {
  // Creamos una nueva fila de tabla
  const row = document.createElement('tr');

  // Insertamos el contenido HTML de la fila con los datos del evento y botones de acción
  row.innerHTML = `
    <td>${event.date}</td>
    <td>${event.name}</td>
    <td>${event.location}</td>
    <td>
      <button class="edit-btn">Editar</button>
      <button class="delete-btn">Eliminar</button>
    </td>
  `;

  // Manejamos el evento de clic en el botón Eliminar
  row.querySelector('.delete-btn').addEventListener('click', () => {
    // Eliminamos el evento del almacenamiento local
    deleteEvent(event);
    // Quitamos la fila de la tabla
    row.remove();
  });

  // Manejamos el evento de clic en el botón Editar
  row.querySelector('.edit-btn').addEventListener('click', () => {
    // Cargamos los datos del evento en el formulario para editar
    document.getElementById('event-name').value = event.name;
    document.getElementById('event-date').value = event.date;
    document.getElementById('event-location').value = event.location;

    // Eliminamos el evento actual para reemplazarlo después
    deleteEvent(event);
    // Quitamos la fila de la tabla visualmente
    row.remove();
  });

  // Finalmente, agregamos la fila al cuerpo de la tabla
  eventList.appendChild(row);
}

// Función para guardar un evento en localStorage
function saveEvent(event) {
  // Obtenemos todos los eventos actuales
  const events = getEvents();

  // Agregamos el nuevo evento al arreglo existente
  events.push(event);

  // Guardamos la lista actualizada en localStorage como JSON
  localStorage.setItem('shalom-events', JSON.stringify(events));
}

// Función que recupera todos los eventos desde localStorage
function getEvents() {
  // Obtenemos los datos guardados o devolvemos un arreglo vacío si no hay ninguno
  return JSON.parse(localStorage.getItem('shalom-events')) || [];
}

// Función para cargar todos los eventos guardados en la tabla al iniciar la página
function loadEvents() {
  // Obtenemos los eventos almacenados
  const events = getEvents();

  // Por cada evento, lo agregamos visualmente a la tabla
  events.forEach(addEventToTable);
}

// Función para eliminar un evento específico del localStorage
function deleteEvent(eventToDelete) {
  // Obtenemos la lista de eventos actuales
  let events = getEvents();

  // Filtramos todos los eventos excepto el que queremos eliminar
  events = events.filter(ev =>
    !(ev.name === eventToDelete.name &&
      ev.date === eventToDelete.date &&
      ev.location === eventToDelete.location)
  );

  // Guardamos la lista actualizada en localStorage
  localStorage.setItem('shalom-events', JSON.stringify(events));
}
