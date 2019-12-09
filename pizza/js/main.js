let mostrarResultado = (e) => {
  e.preventDefault();
  let nombreCompleto = document.getElementById("nombreCompleto").value;
  let email = document.getElementById("email").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let boton_ordenar = document.getElementById("boton_ordenar").value;
  let icono = "shipping.svg";
  let indicacion = "";
  let entrega = document.getElementById("entrega").value;

  if (
    nombreCompleto === "" ||
    email === "" ||
    direccion === "" ||
    telefono === ""
  ) {
    alert("Debe ingresar todos los datos");
    return;
  }
  if (
    entrega.toUpperCase() !== "SI" &&
    entrega.toUpperCase() !== "SÍ" &&
    entrega.toUpperCase() !== "NO"
  ) {
    alert("Ingrese entrega a domicilio (SÍ o NO)");
    return;
  }

  if (entrega.toUpperCase() === "NO") {
    icono = "pizza-shop.svg";
    indicacion = "Recoge tu pizza en 30 min.";
  } else {
    indicacion = "Tu pizza será entregada en 30 min.";
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML =
    '<img class="m-3" src="img/' +
    icono +
    '">' +
    "<h3>Orden Confirmada</h3><p>" +
    nombreCompleto +
    "</p>" +
    "<p>" +
    email +
    "</p>" +
    "<p>" +
    direccion +
    "</p>" +
    "<p>" +
    telefono +
    "</p>" +
    "<p>" +
    indicacion +
    "</p>";
};

boton_ordenar.addEventListener("click", mostrarResultado);