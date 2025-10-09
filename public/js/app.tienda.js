const API_URL = "http://localhost:3000/api/tiendas";

const formulario_tienda = document.getElementById("form-tienda");
const tabla_tienda = document.querySelector("#tabla-tiendas tbody");

const idtienda = document.getElementById("idtienda");

const tienda = document.getElementById("tienda");

const btnGuardarTienda = document.getElementById("btnGuardarTienda");
const btnCancelarTienda = document.getElementById("btnCancelarTienda");

//Retorna el botón guardar a su estado original
btnCancelarTienda.addEventListener("click", () => {
  btnGuardarTienda.innerText = "Guardar";
});

async function obtenerTiendas() {
  const response = await fetch(API_URL, { method: "get" });
  const tiendas = await response.json();
  //console.log(productos)

  //Reiniciamos el contenido de la tabla
  tienda.innerHTML = "";

  tiendas.forEach((tienda) => {
    //Crear una nueva fila y celdas con los datos contenidos en JSON
    const row = tabla.insertRow(); //<tr></tr>

    row.insertCell().textContent = tienda.id; //<td></td>
    row.insertCell().textContent = tienda.tienda; //<td></td>

    //La última celda contendrá 2 botones (funcionalidad)
    const actionCell = row.insertCell();

    //Botón 1: Editar
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.classList.add("btn");
    editButton.classList.add("btn-info");
    editButton.classList.add("btn-sm");
    editButton.onclick = () => cargarParaEdicion(tienda);

    //Botón 2: Eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.classList.add("btn-sm");
    deleteButton.onclick = () => eliminarTienda(tienda.id, tienda.tienda);

    //Agregando ambos botones a la última celda
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
  });
}
