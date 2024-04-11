document.addEventListener("DOMContentLoaded", function () {
  const addList = document.getElementById("add-list");
  const userList = document.getElementById("list");
  let usersData = JSON.parse(localStorage.getItem("usersData")) || {};

  // Función para crear el nuevo item de la lista
  function createListItem(titulo, descripcion, tipo) {
    const listItem = document.createElement("li");
    const addInfo = document.createTextNode(`${titulo} : ${descripcion} : ${tipo} : `);
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.classList.add("edit");
    deleteButton.classList.add("delete");
    editButton.textContent = "Editar";
    deleteButton.textContent = "Borrar";

    listItem.appendChild(addInfo);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
  }

  // Función agregar
  function addContenido(titulo, descripcion, tipo) {
    const listItem = createListItem(titulo, descripcion, tipo);
    userList.appendChild(listItem);
  }


  // INTENTO DE Manejar el agregar
  userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const tipo = document.getElementById("tipo").value;
  
    // Agregar el nuevo item a la lista
    addContenido(titulo, descripcion, tipo);
  });

});
