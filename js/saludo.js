let emailUsuario = localStorage.getItem("email");

let itemLogin = document.querySelector(".item-login");
let itemRegistro = document.querySelector(".item-registro");
let itemSaludo = document.querySelector(".item-saludo");
let itemLogout = document.querySelector(".item-logout");

if (emailUsuario != null) {
    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
    itemSaludo.innerText = `Bienvenido: ${emailUsuario}`;
    itemLogout.innerHTML = `<a href="#" class="logout">Logout</a>`;
}