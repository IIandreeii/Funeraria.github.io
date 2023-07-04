let productos = [];

fetch("./js/productos.json")
	.then(response => response.json())
	.then(data => {
		productos = data;
		cargarProductos(productos);
	})

const contenedorProductos = document.getElementById("contenedor-productos");


function cargarProductos(productosElegidos) {

	contenedorProductos.innerHTML = "";

	productosElegidos.forEach(producto => {

		const div = document.createElement("div");
		// div.classList.add("producto");
		div.innerHTML = `
                <div class="card">
                    <img src="${producto.imagen}">
                    <div class="card-body">
                        <h3>${producto.titulo}</h3>
                        <p class="card-text">S/.${producto.precio}</p>
                    </div>
                    <button type="button" onclick="location.href='/html/product -view.html'"  class="btn btn-sm btn-outline-secondary" id="${producto.id}">Ver Producto</button>
                </div>
        `;

		contenedorProductos.append(div);
	});

}

cargarProductos();