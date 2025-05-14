// let banner_carousel = $('#banner-productos');
// banner_carousel.owlCarousel({
// 	loop: true,
// 	nav: false,
// 	dots: false,
// 	autoplay: true,
// 	responsive: {
// 		0: {
// 			items: 1,
// 			center: true
// 		},
// 		992: {
// 			items: 1,
// 		}
// 	}
// });

// const productos = [
// 	{
// 		"id": 1,
// 		"nombre": "Anillo esmeralda. ",
// 		"descripcion": "verde esmeralda, piedra grande.",
// 		"precio_text": "$ 10.000",
// 		"image_url": "/src/img/productos/prod-1.jpg"
// 	},
// 	{
// 		"id": 2,
// 		"nombre": "Anillo serpiente. ",
// 		"descripcion": "Color dorado",
// 		"precio_text": "$ 4.000",
// 		"image_url": "/src/img/productos/prod-2.jpg"
// 	},
// 	{
// 		"id": 3,
// 		"nombre": "Anillo hojas",
// 		"descripcion": "Color dorado.",
// 		"precio_text": "$ 4.000",
// 		"image_url": "/src/img/productos/prod-3.jpg"
// 	},
// 	{
// 		"id": 4,
// 		"nombre": "Anillo corazón esmeralda",
// 		"descripcion": "Color dorado, piedra verde esmeralda.",
// 		"precio_text": "$ 10.000",
// 		"image_url": "/src/img/productos/prod-4.jpg"
// 	},
// 	{
// 		"id": 5,
// 		"nombre": "Anillo corazón doble",
// 		"descripcion": "Color dorado con verde",
// 		"precio_text": "$ 10.000",
// 		"image_url": "/src/img/productos/prod-5.jpg"
// 	},
// 	{
// 		"id": 6,
// 		"nombre": "Anillo a rayas",
// 		"descripcion": "Color dorado.",
// 		"precio_text": "$ 4.000",
// 		"image_url": "/src/img/productos/prod-7.jpg"
// 	},
// 	{
// 		"id": 7,
// 		"nombre": "Anillo liso",
// 		"descripcion": "Color verde",
// 		"precio_text": "$ 4.000",
// 		"image_url": "/src/img/productos/prod-8.jpg"
// 	},
// 	{
// 		"id": 8,
// 		"nombre": "Anillo mariposa",
// 		"descripcion": "palo de rosa- dorado, grande",
// 		"precio_text": "$ 10.000",
// 		"image_url": "/src/img/productos/prod-9.jpg"
// 	},
// 	{
// 		"id": 9,
// 		"nombre": "Anillo cuadrado",
// 		"descripcion": "lila, piedra grande",
// 		"precio_text": "$ 10.000",
// 		"image_url": "/src/img/productos/prod-10.jpg"
// 	},
// 	{
// 		"id": 10,
// 		"nombre": "Anillo rombos",
// 		"descripcion": "Color dorado",
// 		"precio_text": "$ 4.000",
// 		"image_url": "/src/img/productos/prod-11.jpg"
// 	},
// 	{
// 		"id": 11,
// 		"nombre": "Manilla tipo pandora",
// 		"descripcion": "Color dorado, diseño de flor",
// 		"precio_text": "$ 16.000",
// 		"image_url": "/src/img/productos/prod-12.jpg"
// 	},
// 	{
// 		"id": 12,
// 		"nombre": "Manilla tipo pandora",
// 		"descripcion": "plateado, diseño de oso",
// 		"precio_text": "$ 16.000",
// 		"image_url": "/src/img/productos/prod-13.jpg"
// 	},
// 	{
// 		"id": 13,
// 		"nombre": "Manilla surtida",
// 		"descripcion": "Colores surtidos, diferentes estilos",
// 		"precio_text": "$ 2.000 cada una",
// 		"image_url": "/src/img/productos/prod-14.jpg"
// 	},
// 	{
// 		"id": 14,
// 		"nombre": "Manilla surtida",
// 		"descripcion": "Colores surtidos, diferentes estilos",
// 		"precio_text": "$ 2.000 cada una",
// 		"image_url": "/src/img/productos/prod-15.jpg"
// 	},
// 	{
// 		"id": 15,
// 		"nombre": "Manilla surtida",
// 		"descripcion": "Colores surtidos, diferentes estilos",
// 		"precio_text": "$ 2.000 cada una",
// 		"image_url": "/src/img/productos/prod-16.jpg"
// 	}
// ]

// productos.forEach(producto => {
// 	$("#programas-carousel").append(`
// 		<div class="carousel-card">
// 				<div class="cc-img-container">
// 					<img src="${producto.image_url}" alt="" />
// 				</div>
// 				<div class="cc-body">
// 					<h5>${producto.nombre}</h5>
// 					<p>
// 						${producto.descripcion} ${producto.precio_text}
// 					</p>
// 					<div class="content-btn-carrito">
// 						<a
// 							href="#"
// 							class="btn-carrito"
// 							onclick="addProductToCarro(${producto.id}, event)"
// 						>
// 							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
// 								<title>cart-plus</title>
// 								<path
// 									d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z"
// 								/>
// 							</svg>
// 							<span>Añadir</span>
// 						</a>

// 						<div class="content-cantidad">
// 							<a href="#" class="btn-menos" onclick="nimusProduct(${producto.id}, event)">
// 								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
// 									<title>minus</title>
// 									<path d="M19,13H5V11H19V13Z" />
// 								</svg>
// 							</a>
// 							<input type="text" name="" class="inp-cant" id="cantidad-${producto.id}" value="1" disabled />
// 							<a href="#" class="btn-mas" onclick="moreProduct(${producto.id}, event)">
// 								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
// 									<title>plus</title>
// 									<path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
// 								</svg>
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 	`)
// });


// function addProductToCarro(productoId, e) {
// 	e.preventDefault()
// 	$("#popup-carrito").addClass('active');
// 	let cantProducto = $(`#cantidad-${productoId}`).val()

// 	const storedProducts = localStorage.getItem('productosCarrito');

// 	const productsInCart = storedProducts ? JSON.parse(storedProducts) : [];

// 	let newProduct = productos.find(producto => producto.id == productoId);
// 	newProduct.cantidad = cantProducto;

// 	const existingProductIndex = productsInCart.findIndex((product) => (
// 		product.id === newProduct.id
// 	));

// 	if (existingProductIndex !== -1) {
// 		productsInCart[existingProductIndex] = newProduct;
// 		console.log("El producto fue reemplazado en el carrito.");
// 	} else {
// 		productsInCart.push(newProduct);
// 		console.log("El producto fue añadido al carrito.");
// 	}

// 	localStorage.setItem('productosCarrito', JSON.stringify(productsInCart));

// 	getAllCarrito()
// }

// function isJSONEmpty(jsonString) {
// 	try {
// 		const jsonObject = JSON.parse(jsonString);
// 		return Object.keys(jsonObject).length === 0;
// 	} catch (error) {
// 		return false;
// 	}
// }

// function getAllCarrito() {
// 	$("#content-card-carrito").html("");
// 	const productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'));
// 	console.log("productosCarrito", productosCarrito);

// 	if (productosCarrito === null || productosCarrito === undefined || productosCarrito === "" || productosCarrito.length == 0) {
// 		$("#content-card-carrito").html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-off</title><path d="M22.73,22.73L1.27,1.27L0,2.54L4.39,6.93L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H14.46L15.84,18.38C15.34,18.74 15,19.33 15,20A2,2 0 0,0 17,22C17.67,22 18.26,21.67 18.62,21.16L21.46,24L22.73,22.73M7.42,15A0.25,0.25 0 0,1 7.17,14.75L7.2,14.63L8.1,13H10.46L12.46,15H7.42M15.55,13C16.3,13 16.96,12.59 17.3,11.97L20.88,5.5C20.96,5.34 21,5.17 21,5A1,1 0 0,0 20,4H6.54L15.55,13M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18Z" /></svg><h3>Sin productos para mostrar</h3>`)
// 	} else {
// 		productosCarrito.forEach(productoCarrito => {
// 			$("#content-card-carrito").append(`
// 		<div class="card-carrito">
// 			<img src="${productoCarrito.image_url}" alt="" />
// 			<div>
// 				<h4>${productoCarrito.nombre}</h4>
// 				<span>X${productoCarrito.cantidad} ${productoCarrito.precio_text}</span>
// 			</div>
// 			<a href="#" onclick="deleteProductToCarrito(${productoCarrito.id}, event)">
// 				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
// 					<title>delete-forever</title>
// 					<path
// 						d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
// 					/>
// 				</svg>
// 			</a>
// 		</div>
// 		`)
// 		});
// 	}
// }

// function deleteProductToCarrito(productoId) {
// 	console.log("entra delete");
// 	const storedProducts = localStorage.getItem('productosCarrito');
// 	const productsInCart = storedProducts ? JSON.parse(storedProducts) : [];

// 	const updatedProducts = productsInCart.filter((product) => product.id !== productoId);

// 	localStorage.setItem('productosCarrito', JSON.stringify(updatedProducts));

// 	console.log(updatedProducts);
// 	getAllCarrito()
// }



// function moreProduct(productoId, e) {
// 	e.preventDefault()
// 	let cantidadActual = parseInt($(`#cantidad-${productoId}`).val())

// 	if (cantidadActual <= 2) {
// 		$(`#cantidad-${productoId}`).val(cantidadActual + 1)
// 	}
// }

// function nimusProduct(productoId, e) {
// 	e.preventDefault()
// 	let cantidadActual = parseInt($(`#cantidad-${productoId}`).val())

// 	if (cantidadActual > 1) {
// 		$(`#cantidad-${productoId}`).val(cantidadActual - 1)
// 	}
// }

// function removeProduct(productoId, e) {
// 	e.preventDefault()
// 	console.log("quita producto", productoId);
// }

// $("#btn-cerrar-popup").click(function (e) {
// 	e.preventDefault()
// 	$("#popup-carrito").removeClass("active")
// })

// $(".cortina-popup").click(function (e) {
// 	e.preventDefault()
// 	$("#popup-carrito").removeClass("active")
// })

// $("#btn-carrito").click(function (e) {
// 	e.preventDefault()
// 	getAllCarrito()
// 	$("#popup-carrito").addClass('active');
// })

// $("#btn-comprar").click(function (e) {
// 	e.preventDefault()
// 	console.log("entra comprar");
// 	const storedProducts = JSON.parse(localStorage.getItem('productosCarrito'));
// 	console.log("storedProducts", storedProducts);

// 	const mensaje = formatObjectsToMessage(storedProducts);
// 	if (mensaje) {
// 		sendToWhatsApp(mensaje);
// 	} else {
// 		console.log('El array no es válido.');
// 	}
// })

// function formatObjectsToMessage(array) {
// 	let message = "";
// 	array.forEach((obj) => {
// 		message += `Nombre del producto: ${obj.nombre}\n`;
// 		message += `Descripción: ${obj.descripcion}\n`;
// 		message += `Precio unitario: ${obj.precio_text}\n`;
// 		message += `Cantida: ${obj.cantidad}\n`;
// 		message += `\n`;
// 	});
// 	return message;
// }

// function sendToWhatsApp(message) {
// 	const numeroDestino = '573108008962';
// 	const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numeroDestino)}&text=${encodeURIComponent(message)}`;
// 	window.open(whatsappURL, '_blank');
// }
