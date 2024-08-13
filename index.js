const productos = [
  {
    id: 1,
    nombre: "reloj",
    imagen: "img.jpg/img.jpg1.webp",
    precio: 110000,
  },
  {
    id: 2,
    nombre: "reloj2",
    imagen: "img.jpg/img.jpg2.webp",
    precio: 120000,
  },
  {
    id: 3,
    nombre: "reloj3",
    imagen: "img.jpg/img.jpg3.png",
    precio: 130000,
  },
  {
    id: 4,
    nombre: "reloj4",
    imagen: "img.jpg/img.jpg4.png",
    precio: 140000,
  },
  {
    id: 5,
    nombre: "reloj5",
    imagen: "img.jpg/img.jpg5.webp",
    precio: 150000,
  },
  {
    id: 6,
    nombre: "reloj6",
    imagen: "img.jpg/img.jpg6.webp",
    precio: 160000,
  },
  {
    id: 7,
    nombre: "reloj7",
    imagen: "img.jpg/img.jpg7.png",
    precio: 170000,
  },
  {
    id: 8,
    nombre: "reloj8",
    imagen: "img.jpg/img.jpg8.png",
    precio: 180000,
  },
];

let carrito = [];
let seleccion = prompt("¿Desea agregar algun reloj al carrito?");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor responda si o no");
  seleccion = prompt("¿Desea agregar algun reloj al carrito?");
}
if (seleccion == "si") {
  alert("Agregue el reloj que desea");

  let todoslosproductos = productos.map(
    (productos) => productos.nombre + "" + productos.precio + "$"
  );
  alert(todoslosproductos.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por venir! hasta pronto.");
}
while (seleccion != "no") {
  let producto = prompt(" agrega algun reloj al carrito.");
  let precio = 0;

  if (
    producto == "reloj " ||
    producto == "reloj2  " ||
    producto == "reloj3 " ||
    producto == "reloj4  " ||
    producto == "reloj5 " ||
    producto == "reloj6  " ||
    producto == "reloj7  " ||
    producto == "reloj8 "
  ) {
    switch (producto) {
      case "reloj":
        precio = 110000;
        break;
      case "reloj2":
        precio = 120000;
        break;
      case "reloj3":
        precio = 130000;
        break;
      case "reloj4":
        precio = 140000;
        break;
      case "reloj5":
        precio = 150000;
        break;
      case "reloj6":
        precio = 160000;
        break;
      case "reloj7":
        precio = 170000;
        break;
      case "reloj8":
        precio = 180000;
        break;

      default:
        break;
    }
    let unidades = parseInt(prompt("cuantas unidades desea llevar?"));
    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("no tenemos ese producto");
  }

  seleccion = prompt("¿Desea seguir comprando?");

  while (seleccion === "no") {
    alert("Gracias por la compra! hasta pronto.");
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto = ${carritoFinal.producto}, unidades:${
          carritoFinal.unidades
        }, total a pagar por producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
    });
    break;
  }
}
