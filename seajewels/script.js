// muestra el formulario de registro
function showRegisterForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
}

// muestra el formulario de login
function showLoginForm() {
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
}

/* muestra mensajes de registro y login exitoso*/
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login exitoso");
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registro exitoso");
});
