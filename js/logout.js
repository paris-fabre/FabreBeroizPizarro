let linkLogout = document.querySelector(".logout");

let liLogin = document.querySelector(".item-login");
let liRegistro = document.querySelector(".item-registro");
let liSaludo = document.querySelector(".item-saludo");
let liLogout = document.querySelector(".item-logout");

if (linkLogout != null) {
    linkLogout.addEventListener("click", function(event) {
        event.preventDefault();

        localStorage.removeItem("email");

        liSaludo.innerText = "";
        liLogout.innerHTML = "";

        liLogin.style.display = "block";
        liRegistro.style.display = "block";
    });
}