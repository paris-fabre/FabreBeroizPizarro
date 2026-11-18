let listaCategorias = document.querySelector("#lista-categorias");
fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.length; i++) {
            let cat = data[i];
            listaCategorias.innerHTML += <li><a href="./category.html?category=${cat.slug}&name=${cat.name}">${cat.name}</a></li>;
        }
    })
    .catch(function(error) {
        console.log("El error es:" + error);
    });

let gridMasVendidos = document.querySelector(".mas-vendidos .grid-productos");

fetch("https://dummyjson.com/products/category/kitchen-accessories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < 10; i++) {
            let producto = data.products[i];
            gridMasVendidos.innerHTML += `
                <article class="producto">
                    <img class="imagen" src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <h4>Precio: ${producto.price} USD</h4>
                    <a href="./product.html?id=${producto.id}">Ver detalle</a>
                </article>
        `;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    })


let gridAleatorio = document.querySelector(".aleatorio .grid-productos");

fetch("https://dummyjson.com/products/category/groceries")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < 10; i++) {
            let producto = data.products[i];
            gridAleatorio.innerHTML += `
                <article class="producto">
                    <img class="imagen" src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                    <h4>Precio: ${producto.price} USD</h4>
                    <a href="./product.html?id=${producto.id}">Ver detalle</a>
                </article>
        `;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    })