// REGISTRO
function register() {
  const user = document.getElementById('new-username').value;
  const pass = document.getElementById('new-password').value;

  if (!user || !pass) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  localStorage.setItem('admin-user', user);
  localStorage.setItem('admin-pass', pass);
  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const savedUser = localStorage.getItem('admin-user');
  const savedPass = localStorage.getItem('admin-pass');

  if (user === savedUser && pass === savedPass) {
    window.location.href = "admin.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}
