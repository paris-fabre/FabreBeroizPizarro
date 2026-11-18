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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("category");
let nombre = queryStringObj.get("name");

let titulo = document.querySelector("#titulo-categoria");
let productos = document.querySelector("#productos");

if (nombre == null) {
    titulo.innerText = categoria;
} else {
    titulo.innerText = nombre;
}

fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.products.length; i++) {
            let producto = data.products[i];
            productos.innerHTML += `
                <article class="producto">
                    <img class="imagen" src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <h4>Precio: ${producto.price} USD</h4>
                    <a href="./product.html?id=${producto.id}">Ver detalle</a> 
                </article>`;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });
