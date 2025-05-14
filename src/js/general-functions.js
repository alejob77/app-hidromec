/**
 * @param nombreVariableGet
 * @return valor / null (si no existe)
 */
(function ($) {
	$.getUrlSearch = function (key) {
		key = key.replace(/[\[]/, '\\[');
		key = key.replace(/[\]]/, '\\]');
		var pattern = "[\\?&]" + key + "=([^&#]*)";
		var regex = new RegExp(pattern);
		var url = unescape(window.location.href);
		var results = regex.exec(url);
		if (results === null) {
			return null;
		} else {
			return results[1];
		}
	}
})(jQuery);

/**
 * Permite ingresar solo números
 */
function soloNumeros(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^[0-9]*$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo letras
 */
function soloLetras(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo usuario
 */
function soloUsuario(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ0-9]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo NIT
 */
function soloNit(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9-]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar correos
 */
function soloEmail(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ.@-_]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo letras y números
 */
function soloLetrasNumeros(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ,. ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar nombres de productos
 */
function soloNombresProductos(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ,.\(\)\/ ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo contraseñas
 */
function soloPass(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ@-_;.]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo fechas
 */
function soloFecha(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9/]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite solo direccion
 */
function soloDireccion(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ#. ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite solo pagina web
 */
function soloDireccionWeb(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-z-./:]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite validar un campo select
 */
function validarSelect(texto, identificador) {

	if (texto != '') {
		$(identificador).val(texto);
	}
}

/**
 * Permite validar correo electrónico
 */
function validarEmail(txtMail) {
	var patron = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

	return patron.test(txtMail);
}

/**
 * Permite que solo se ingrese un maximo de caracteres en el input
 */
function validaMaximo(elemento, numMax) {
	var numTxt = elemento.val().length; // Número de caracteres actuales en el input
	var numero_maximo = numMax - 1;

	if (numTxt > numero_maximo) {
		return false;
	} else {
		return true;
	}
}

/**
 * Genera una notificacion
 * Param @id String -> Id del elemento sobre el que se va ubicar
 * Param @text String -> Texto que se desea mostrar
 * Param @arg_focus String -> elemento al que se le debe dar el foco
 * Param @position String ["y x"] {"bottom center"}
 * Param @classColor String {success/error/info/warn}
 */
function notificacion(arg_id, arg_text, arg_focus, arg_position, arg_classColor, arg_segundos) {

	if (arg_focus != "") {
		$(arg_id).focus();
	}

	if (arg_segundos == undefined) {
		arg_segundos = 1800;

	}

	$(arg_id).notify(arg_text, {
		position: arg_position,
		className: arg_classColor,
		autoHideDelay: arg_segundos
	});
}

let producto_carousel = $('#carousel-producto');
let servicio_carousel = $('#carousel-servici');
let banner_carousel = $('#banner-productos');
banner_carousel.owlCarousel({
	loop: false,
	nav: false,
	dots: false,
	autoplay: true,
	responsive: {
		0: {
			items: 1,
			center: true
		},
		992: {
			items: 1,
		}
	}
});

// servicio_carousel.owlCarousel({
// 	margin: 30,
// 	loop: true,
// 	nav: false,
// 	dots: false,
// 	autoplay: true,
// 	slideTransition: 'linear',
// 	autoplayTimeout: 1000,
// 	autoplaySpeed: 5000,
// 	responsive: {
// 		0: {
// 			items: 1,
// 			center: true
// 		},
// 		992: {
// 			items: 4
// 		}
// 	}
// });

producto_carousel.owlCarousel({
	margin: 30,
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	slideTransition: 'linear',
	autoplayTimeout: 1000,
	autoplaySpeed: 5000,
	responsive: {
		0: {
			items: 1,
			center: true
		},
		992: {
			items: 5
		}
	}
});

const productos = [
	{
		"id": 1,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Adaptador Hembra",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/1.png"
	},
	{
		"id": 2,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Adaptador Macho",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/2.png"
	},
	{
		"id": 3,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Codo 90°",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/3.png"
	},
	{
		"id": 4,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Codo 90° Roscado",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/4.png"
	},
	{
		"id": 5,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Codo 45° (SemiCodo)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/5.png"
	},
	{
		"id": 6,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Codo 45° (SemiCodo) Roscado",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/6.png"
	},
	{
		"id": 7,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tapón Hembra",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/7.png"
	},
	{
		"id": 8,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tapón Hembra Roscado",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/8.png"
	},
	{
		"id": 9,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tapón Macho Roscado",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/9.png"
	},
	{
		"id": 10,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tee",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/10.png"
	},
	{
		"id": 11,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tee Rosacada",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/11.png"
	},
	{
		"id": 12,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Unión",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/12.png"
	},
	{
		"id": 13,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Unión Roscada",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/13.png"
	},
	{
		"id": 14,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Universal PCP",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/14.png"
	},
	{
		"id": 15,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Universal Roscada PCP",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/15.png"
	},
	{
		"id": 16,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Valvula Bola PCP (150PSI)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/18.png"
	},
	{
		"id": 17,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Valvula Bola Roscada PCP (150PSI)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/19.png"
	},
	{
		"id": 18,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tubería Presión X 6 Mts RDE 9 (500 PSI)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/20-21-22-23-24-25.png"
	},
	{
		"id": 19,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tubería Presión X 6 Mts RDE 11 (400 PSI)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/20-21-22-23-24-25.png"
	},
	{
		"id": 20,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tubería Presión X 6 Mts RDE 13.5 (315 PSI)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/20-21-22-23-24-25.png"
	},
	{
		"id": 21,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tubería Presión X 6 Mts RDE 21 (200 PSI)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/20-21-22-23-24-25.png"
	},
	{
		"id": 22,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tubería Presión X 6 Mts RDE 26 (160 PSI) ",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/20-21-22-23-24-25.png"
	},
	{
		"id": 23,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Tubería Presión X 6 Mts RDE 32.5 (125 PSI)",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/20-21-22-23-24-25.png"
	},
	{
		"id": 24,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Buje Soldado x Soldado",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/16.png"
	},
	{
		"id": 25,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "PVC Presión",
		"nombre": "Buje Soldado x Roscado",
		"medidas":[
			"1/2",
			"3/4",
			"1",
			"11/4",
			"11/2",
			"2",
			"21/2",
			"3",
			"4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/17.png"
	},
	{
		"id": 25,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "Complementos",
		"nombre": "Limpiador para PVC",
		"medidas":[
			"1/4 Gal",
			"1/8 Gal",
			"12 Onzas",
			"1/16 Gal",
			"1/32 Gal",
			"1/16 Gal",
			"1/128 Gal",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/28.png"
	},
	{
		"id": 25,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "Complementos",
		"nombre": "Soldadura para PVC",
		"medidas":[
			"1/4 Gal",
			"1/8 Gal",
			"12 Onzas",
			"1/16 Gal",
			"1/32 Gal",
			"1/16 Gal",
			"1/128 Gal",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/29.png"
	},
	{
		"id": 26,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "Complementos",
		"nombre": "Cinta Teflon x 10 Mts",
		"medidas":[
			"1/2",
			"3/4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/28.png"
	},
	{
		"id": 27,
		"categoria": "Tubería y Accesorios",
		"sub-categoria": "Complementos",
		"nombre": "Cinta Teflon x 50 Mts",
		"medidas":[
			"1/2",
			"3/4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/29.png"
	},
	{
		"id": 28,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Motores de Combustion",
		"nombre": "Motor Gasolina 3600 RPM (Cuña)",
		"medidas":[
			"4.2",
			"6.5",
			"6.7",
			"9",
			"10",
			"13",
			"14",
			"15",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/30-31.png"
	},
	{
		"id": 29,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Motores de Combustion",
		"nombre": "Motor Gasolina 3600 RPM (Rosca)",
		"medidas":[
			"4.2",
			"6.5",
			"6.7",
			"9",
			"10",
			"13",
			"14",
			"15",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/30-31.png"
	},
	{
		"id": 30,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Motores de Combustion",
		"nombre": "Motor Diesel 3600 RPM (Cuña/Rosca)",
		"medidas":[
			"4.2",
			"6.5",
			"6.7",
			"9",
			"10",
			"13",
			"14",
			"15",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/32-33.png"
	},
	{
		"id": 31,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Motores de Combustion",
		"nombre": "Motor Diesel 1800 RPM (Cuña/Rosca)",
		"medidas":[
			"4.2",
			"6.5",
			"6.7",
			"9",
			"10",
			"13",
			"14",
			"15",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/32-33.png"
	},
	{
		"id": 32,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Gasolian de Presion 6.5 HP",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/34-35.png"
	},
	{
		"id": 33,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Gasolian de Presion 13 HP",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/34-35.png"
	},
	{
		"id": 34,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Presion 4.2 HP",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/36-37-38-39.png"
	},
	{
		"id": 35,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Presion 6.7 HP",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/36-37-38-39.png"
	},
	{
		"id": 36,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Presion 10 HP",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/36-37-38-39.png"
	},
	{
		"id": 37,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Presion 14 HP",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/36-37-38-39.png"
	},
	{
		"id": 38,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Gasolian de Caudal 2.8 HP (Aluminio)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/40-41.png"
	},
	{
		"id": 39,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Gasolian de Caudal 5.5 HP (Aluminio)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/40-41.png"
	},
	{
		"id": 40,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Caudal 4.2 HP (Aluminio)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/42-43-44.png"
	},
	{
		"id": 41,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Caudal 6.7 HP (Aluminio)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/42-43-44.png"
	},
	{
		"id": 42,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Caudal 10 HP (Aluminio)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/42-43-44.png"
	},
	{
		"id": 43,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Gasolian de Caudal 13 HP (Hierro)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/45.png"
	},
	{
		"id": 44,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Caudal 10 HP (Hierro)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/46-47.png"
	},
	{
		"id": 45,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "MotoBombas",
		"nombre": "MotoBombas a Diesel de Caudal 14 HP (Hierro)",
		"medidas":[
			"11/2x11/2",
			"2x2",
			"3x3",
			"4x3",
			"4x4",
			"6x4",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/46-47.png"
	},
	{
		"id": 46,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Fumigadoras",
		"nombre": "Fumigadora Estacionaria Gasolina 6.5 HP",
		"medidas":[
			"Ts 22",
			"Ts 28",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/48.png"
	},
	{
		"id": 47,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Fumigadoras",
		"nombre": "Fumigadora Estacionaria Gasolina 6.5 HP",
		"medidas":[
			"Ts 22",
			"Ts 28",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/49.png"
	},
	{
		"id": 48,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Fumigadoras",
		"nombre": "Fumigadora Sin Motor",
		"medidas":[
			"Ts 22",
			"Ts 28",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/50.png"
	},
	{
		"id": 49,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Fumigadoras",
		"nombre": "Fumigadora Manual RoyalCondor",
		"medidas":[
			"Clasica",
			"Activa",
			"Aliada",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/51.png"
	},
	{
		"id": 50,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Fumigadoras",
		"nombre": "Fumigadora Manual RoyalCondor",
		"medidas":[
			"5 Lts",
			"7 Lts",
			"10 Lts",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/52.png"
	},
	{
		"id": 51,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Guadañas",
		"nombre": "Maruyama",
		"medidas":[
			"B420H",
			"BC420HE",
			"BF420H",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/53.png"
	},
	{
		"id": 52,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Guadañas",
		"nombre": "Shindaiwa",
		"medidas":[
			"C35",
			"B45-1",
			"B45 Eje Gira.",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/54.png"
	},
	{
		"id": 53,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Fumigadoras",
		"nombre": "Stihl",
		"medidas":[
			"FS 230",
			"FS 250",
			"FS 291",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/55.png"
	},
	{
		"id": 54,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Fumigadoras",
		"nombre": "Husqvarna",
		"medidas":[
			"236R",
			"143R-II",
			"553RS",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/56.png"
	},
	{
		"id": 55,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Motosierras",
		"nombre": "Stihl",
		"medidas":[
			"MS 382",
			"MS 462",
			"MS 661",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/57.png"
	},
	{
		"id": 56,
		"categoria": "Maquinaria Agricola",
		"sub-categoria": "Guadañas",
		"nombre": "Husqvarna",
		"medidas":[
			"445 II",
			"61",
			"372 XP",
		],
		"descripcion": "",
		"image_url": "/src/img/productos/58.png"
	},
	{
		"id": 57,
		"categoria": "Mangueras",
		"sub-categoria": "Multiproposito",
		"nombre": "Polietileno Calibre 40 x 90 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/59-60.png"
	},
	{
		"id": 58,
		"categoria": "Mangueras",
		"sub-categoria": "Multiproposito",
		"nombre": "Polietileno Calibre 60 x 90 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/59-60.png"
	},
	{
		"id": 59,
		"categoria": "Mangueras",
		"sub-categoria": "Multiproposito",
		"nombre": "Revestida Calibre 60 x 80 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/61-62.png"
	},
	{
		"id": 60,
		"categoria": "Mangueras",
		"sub-categoria": "Multiproposito",
		"nombre": "Revestida Calibre 80 x 80 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/61-62.png"
	},
	{
		"id": 61,
		"categoria": "Mangueras",
		"sub-categoria": "Jardineria",
		"nombre": "Swan x 100 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/63.png"
	},
	{
		"id": 62,
		"categoria": "Mangueras",
		"sub-categoria": "Multiproposito",
		"nombre": "Jardineria",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/64.png"
	},
	{
		"id": 63,
		"categoria": "Mangueras",
		"sub-categoria": "Flexible",
		"nombre": "Lechoza de PVC x 100 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/65.png"
	},
	{
		"id": 64,
		"categoria": "Mangueras",
		"sub-categoria": "Plana",
		"nombre": "Tipo Bombero x 100 Mts (Baja Presion)",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/66-67.png"
	},
	{
		"id": 65,
		"categoria": "Mangueras",
		"sub-categoria": "Plana",
		"nombre": "Tipo Bombero x 100 Mts (Alta Presion)",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/66-67.png"
	},
	{
		"id": 66,
		"categoria": "Mangueras",
		"sub-categoria": "Alimentos",
		"nombre": "Manguera Transparente con Espiral en Acero x 50 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/68.png"
	},
	{
		"id": 67,
		"categoria": "Mangueras",
		"sub-categoria": "Alimentos",
		"nombre": "Manguera Transparente con Espiral en PVC x 50 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/69.png"
	},
	{
		"id": 68,
		"categoria": "Mangueras",
		"sub-categoria": "Alimentos",
		"nombre": "Manguera Transparente Trensada x 50 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/70.png"
	},
	{
		"id": 69,
		"categoria": "Mangueras",
		"sub-categoria": "Succion",
		"nombre": "Manguera Succion x 3 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/71-72.png"
	},
	{
		"id": 70,
		"categoria": "Mangueras",
		"sub-categoria": "Succion",
		"nombre": "Manguera Succion x 6 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/71-72.png"
	},
	{
		"id": 71,
		"categoria": "Mangueras",
		"sub-categoria": "Acometida",
		"nombre": "Manguera Acometida x 90 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/73.png"
	},
	{
		"id": 72,
		"categoria": "Mangueras",
		"sub-categoria": "Goteo",
		"nombre": "Manguera Goteo x 100 Mts",
		"medidas":[
			"1/2",
			"3/4",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/74.png"
	},
	{
		"id": 73,
		"categoria": "Lubricantes",
		"sub-categoria": "Aceite",
		"nombre": "BEG Prime 1/4",
		"medidas":[
			"2T",
			"20W-50",
			"15W-40"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/75-76.png"
	},
	{
		"id": 74,
		"categoria": "Lubricantes",
		"sub-categoria": "Aceite",
		"nombre": "BEG Prime Galon",
		"medidas":[
			"2T",
			"20W-50",
			"15W-40"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/75-76.png"
	},
	{
		"id": 75,
		"categoria": "Lubricantes",
		"sub-categoria": "Aceite",
		"nombre": "Enermax 1/4",
		"medidas":[
			"2T",
			"20W-50",
			"15W-40"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/77-78.png"
	},
	{
		"id": 76,
		"categoria": "Lubricantes",
		"sub-categoria": "Aceite",
		"nombre": "Enermax Galon",
		"medidas":[
			"2T",
			"20W-50",
			"15W-40"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/77-78.png"
	},
	{
		"id": 77,
		"categoria": "Lubricantes",
		"sub-categoria": "Grasa",
		"nombre": "BEG Litio Ep",
		"medidas":[
			"2T",
			"20W-50",
			"15W-40"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/79.png"
	},
	{
		"id": 78,
		"categoria": "Acoples ",
		"sub-categoria": "Plastico",
		"nombre": "Valvula Tipo J",
		"medidas":[
			"1",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/80.png"
	},
	{
		"id": 79,
		"categoria": "Acoples ",
		"sub-categoria": "Aluminio",
		"nombre": "Valvula Tipo J",
		"medidas":[
			"1",
			"11/2",
			"2",
			"3",
			"4"
		],
		"descripcion": "",
		"image_url": "/src/img/productos/81.png"
	},


	
]
console.log(productos);

productos.forEach(producto => {
	$("#programas-carousel").append(`
		<div class="carousel-card">
				<div class="cc-img-container">
					<img src="${producto.image_url}" alt="" />
				</div>
				<div class="cc-body">
					<h5>${producto.nombre}</h5>
					<p>
						${producto.descripcion} ${producto.precio_text}
					</p>
					<div class="content-btn-carrito">
						<a
							href="#"
							class="btn-carrito"
							onclick="addProductToCarro(${producto.id}, event)"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<title>cart-plus</title>
								<path
									d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z"
								/>
							</svg>
							<span>Añadir</span>
						</a>

						<div class="content-cantidad">
							<a href="#" class="btn-menos" onclick="nimusProduct(${producto.id}, event)">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<title>minus</title>
									<path d="M19,13H5V11H19V13Z" />
								</svg>
							</a>
							<input type="text" name="" class="inp-cant" id="cantidad-${producto.id}" value="1" disabled />
							<a href="#" class="btn-mas" onclick="moreProduct(${producto.id}, event)">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<title>plus</title>
									<path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
	`)
});


function addProductToCarro(productoId, e) {
	e.preventDefault()
	$("#popup-carrito").addClass('active');
	let cantProducto = $(`#cantidad-${productoId}`).val()

	const storedProducts = localStorage.getItem('productosCarrito');

	const productsInCart = storedProducts ? JSON.parse(storedProducts) : [];

	let newProduct = productos.find(producto => producto.id == productoId);
	newProduct.cantidad = cantProducto;

	const existingProductIndex = productsInCart.findIndex((product) => (
		product.id === newProduct.id
	));

	if (existingProductIndex !== -1) {
		productsInCart[existingProductIndex] = newProduct;
		console.log("El producto fue reemplazado en el carrito.");
	} else {
		productsInCart.push(newProduct);
		console.log("El producto fue añadido al carrito.");
	}

	localStorage.setItem('productosCarrito', JSON.stringify(productsInCart));

	getAllCarrito()
}

function isJSONEmpty(jsonString) {
	try {
		const jsonObject = JSON.parse(jsonString);
		return Object.keys(jsonObject).length === 0;
	} catch (error) {
		return false;
	}
}

function getAllCarrito() {
	$("#btn-comprar").css("display", "block")
	$("#content-card-carrito").html("");
	const productosCarrito = JSON.parse(localStorage.getItem('productosCarrito'));
	console.log("productosCarrito", productosCarrito);

	if (productosCarrito === null || productosCarrito === undefined || productosCarrito === "" || productosCarrito.length == 0) {
		$("#content-card-carrito").html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-off</title><path d="M22.73,22.73L1.27,1.27L0,2.54L4.39,6.93L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H14.46L15.84,18.38C15.34,18.74 15,19.33 15,20A2,2 0 0,0 17,22C17.67,22 18.26,21.67 18.62,21.16L21.46,24L22.73,22.73M7.42,15A0.25,0.25 0 0,1 7.17,14.75L7.2,14.63L8.1,13H10.46L12.46,15H7.42M15.55,13C16.3,13 16.96,12.59 17.3,11.97L20.88,5.5C20.96,5.34 21,5.17 21,5A1,1 0 0,0 20,4H6.54L15.55,13M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18Z" /></svg><h3>Sin productos para mostrar</h3>`)
		$("#btn-comprar").css("display", "none")
	} else {
		productosCarrito.forEach(productoCarrito => {
			$("#content-card-carrito").append(`
		<div class="card-carrito">
			<img src="${productoCarrito.image_url}" alt="" />
			<div>
				<h4>${productoCarrito.nombre}</h4>
				<span>X${productoCarrito.cantidad} ${productoCarrito.precio_text}</span>
			</div>
			<a href="#" onclick="deleteProductToCarrito(${productoCarrito.id}, event)">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<title>delete-forever</title>
					<path
						d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
					/>
				</svg>
			</a>
		</div>
		`)
		});
	}
}

function deleteProductToCarrito(productoId, e) {
	e.preventDefault()
	console.log("entra delete");
	const storedProducts = localStorage.getItem('productosCarrito');
	const productsInCart = storedProducts ? JSON.parse(storedProducts) : [];

	const updatedProducts = productsInCart.filter((product) => product.id !== productoId);

	localStorage.setItem('productosCarrito', JSON.stringify(updatedProducts));

	console.log(updatedProducts);
	getAllCarrito()
}



function moreProduct(productoId, e) {
	e.preventDefault()
	let cantidadActual = parseInt($(`#cantidad-${productoId}`).val())

	if (cantidadActual <= 2) {
		$(`#cantidad-${productoId}`).val(cantidadActual + 1)
	}
}

function nimusProduct(productoId, e) {
	e.preventDefault()
	let cantidadActual = parseInt($(`#cantidad-${productoId}`).val())

	if (cantidadActual > 1) {
		$(`#cantidad-${productoId}`).val(cantidadActual - 1)
	}
}

function removeProduct(productoId, e) {
	e.preventDefault()
	console.log("quita producto", productoId);
}

$("#btn-cerrar-popup").click(function (e) {
	e.preventDefault()
	$("#popup-carrito").removeClass("active")
})

$(".cortina-popup").click(function (e) {
	e.preventDefault()
	$("#popup-carrito").removeClass("active")
})

$("#btn-carrito").click(function (e) {
	e.preventDefault()
	getAllCarrito()
	$("#popup-carrito").addClass('active');
})

$("#btn-comprar").click(function (e) {
	e.preventDefault()
	console.log("entra comprar");
	const storedProducts = JSON.parse(localStorage.getItem('productosCarrito'));
	console.log("storedProducts", storedProducts);

	const mensaje = formatObjectsToMessage(storedProducts);
	if (mensaje) {
		sendToWhatsApp(mensaje);
	} else {
		console.log('El array no es válido.');
	}
})

function formatObjectsToMessage(array) {
	let message = "";
	array.forEach((obj) => {
		message += `Nombre del producto: ${obj.nombre}\n`;
		message += `Descripción: ${obj.descripcion}\n`;
		message += `Precio unitario: ${obj.precio_text}\n`;
		message += `Cantida: ${obj.cantidad}\n`;
		message += `\n`;
	});
	return message;
}

function sendToWhatsApp(message) {
	const numeroDestino = '573108008962';
	const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numeroDestino)}&text=${encodeURIComponent(message)}`;
	window.open(whatsappURL, '_blank');
}
