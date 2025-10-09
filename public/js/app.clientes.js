const API_URL = "http://localhost:3000/api/clientes";

const formulario_cliente = document.getElementById("form-cliente");
const tabla_cliente = document.querySelector("#tabla-clientes tbody");

const idCliente = document.getElementById("id");
const apellidos = document.getElementById("apellidos");
const nombres = document.getElementById("nombres");
const dni = document.getElementById("dni");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");

const tienda = document.getElementById("tienda");

const btnGuardarCliente = document.getElementById("btnGuardarCliente");
const btnCancelarCliente = document.getElementById("btnCancelarCliente");

//Retorna el botón guardar a su estado original
btnCancelarCliente.addEventListener("click", () => {
  btnGuardarCliente.innerText = "Guardar";
});

async function obtenerClientes() {
  const response = await fetch(API_URL, { method: "get" });
  const clientes = await response.json();
  //console.log(productos)

  //Reiniciamos el contenido de la tabla
  tabla_cliente.innerHTML = "";

  clientes.forEach((cliente) => {
    const row = tabla.insertRow(); //<tr></tr>

    row.insertCell().textContent = cliente.id; //<td></td>
    row.insertCell().textContent = cliente.apellidos; //<td></td>
    row.insertCell().textContent = cliente.nombres; //<td></td>
    row.insertCell().textContent = cliente.dni; //<td></td>
    row.insertCell().textContent = cliente.telefono; //<td></td>
    row.insertCell().textContent = cliente.direccion; //<td></td>
    row.insertCell().textContent = cliente.tienda; //<td></td>

    const actionCell = row.insertCell();

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.classList.add("btn");
    editButton.classList.add("btn-info");
    editButton.classList.add("btn-sm");
    editButton.onclick = () => cargarParaEdicion(cliente);

    //Botón 2: Eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.classList.add("btn-sm");
    deleteButton.onclick = () =>
      eliminarTienda(
        cliente.id,
        cliente.apellidos,
        cliente.nombres,
        cliente.dni,
        cliente.telefono,
        cliente.direccion,
        cliente.tienda
      );

    //Agregando ambos botones a la última celda
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
  });
}
