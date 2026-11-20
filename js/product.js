let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let nombre = document.querySelector(".producto-nombre");
let marca = document.querySelector(".producto-marca");
let foto = document.querySelector(".producto-foto");
let precio = document.querySelector(".precio");
let descripcion = document.querySelector(".descripcion");
let categoria = document.querySelector(".producto-categoria");
let stock = document.querySelector(".producto-stock");
let listaTags = document.querySelector(".producto-tags");
let listaResenas = document.querySelector(".lista-resenas");

fetch(`https://dummyjson.com/products/${id}`)
    .then(function(response) {
        return response.json();
    })
   .then(function(producto) {
        nombre.innerText = producto.title;
        descripcion.innerText = producto.description;
        precio.innerText = `Precio: ${producto.price} USD`;
        stock.innerText = `Stock: ${producto.stock} unidades`;

        foto.src = producto.thumbnail;
        foto.alt = producto.title;

        if (producto.brand == undefined) {
            marca.innerText = "Marca: sin especificar";
        } else {
            marca.innerText = `Marca: ${producto.brand}`;
        }

        categoria.innerText = producto.category;
        categoria.href = `./category.html?category=${producto.category}&name=${producto.category}`;

        for (let i = 0; i < producto.tags.length; i++) {
            if (i < 3) {
                listaTags.innerHTML += `<li class="tag">${producto.tags[i]}</li>`;
            }
        }


        for (let i = 0; i < producto.reviews.length; i++){
            let review = producto.reviews[i];
            listaResenas.innerHTML += `
                <article>
                    <div>
                        <span>${review.reviewerName}</span>
                        <span>${review.date}</span>
                        <p class="rating">Rating: ${review.rating}/5</p>
                        <p>${review.comment}</p>
                    </div>
                </article>`;
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });
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