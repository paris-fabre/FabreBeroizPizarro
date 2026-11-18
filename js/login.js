let listaCategorias = document.querySelector("#lista-categorias");

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.length; i++) {
            let cat = data[i];
            listaCategorias.innerHTML += `<li><a href="./category.html?category=${cat.slug}&name=${cat.name}">${cat.name}</a></li>`;
        }
    })
    .catch(function(error) {
        console.log("El error es:" + error);
    });

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
let formBuscador = document.querySelector(".buscador-form");
let campoBuscar = document.querySelector(".buscador-input");
let errorBuscador = document.querySelector(".buscador-error");

formBuscador.addEventListener("submit", function(event) {
    event.preventDefault();

    if (campoBuscar.value == "") {
        errorBuscador.innerText = "El campo de búsqueda no puede estar vacío";
    } else if (campoBuscar.value.length < 3) {
        errorBuscador.innerText = "La búsqueda debe tener al menos 3 caracteres";
    } else {
        this.submit();
    }
});