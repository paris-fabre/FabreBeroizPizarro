let formulario = document.querySelector(".login form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let errorEmail = document.querySelector("#error-email");
let errorPassword = document.querySelector("#error-password");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let hayErrores = false;

    errorEmail.innerText = "";
    errorPassword.innerText = "";

    if (email.value == "") {
        errorEmail.innerText = "El email es obligatorio";
        hayErrores = true;
    }

    if (password.value == "") {
        errorPassword.innerText = "La contraseña es obligatoria";
        hayErrores = true;
    } else if (password.value.length < 6) {
        errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres";
        hayErrores = true;
    }

    if (hayErrores == false) {
        localStorage.setItem("email", email.value);
        this.submit();
    }
})