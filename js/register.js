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

let formulario = document.querySelector(".register form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");

let errorEmail = document.querySelector("#error-email");
let errorPassword = document.querySelector("#error-password");
let errorPassword2 = document.querySelector("#error-password2");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let hayErrores = false;

    errorEmail.innerText = "";
    errorPassword.innerText = "";
    errorPassword2.innerText = "";

    if (email.value == "") {
        errorEmail.innerText = "El email es obligatorio";
        hayErrores = true;
    }

    if (password.value =="") {
        errorPassword.innerText = "La contraseña es obligatoria";
        hayErrores = true;
    } else if (password.value.length < 6) {
        errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres";
        hayErrores = true;
    }

    if (password.value != password2.value) {
        errorPassword2.innerText = "Las contraseñas no coinciden";
        hayErrores = true;
    }

    if (hayErrores == false) {
        this.submit();
    }
});
