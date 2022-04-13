export async function carrito() {
  document
    .querySelector("#listarCards")
    .addEventListener("click", async (e) => {
      const { data } = await axios.get(
        "https://backend-principe-fresco.herokuapp.com/camisetas/"
      );
      const btnDetalle = e.target.classList.contains("carrito");
      const id = e.target.id;
      if (btnDetalle) {
        const singleProduct = data.find((product) => product.id == id);
        if (JSON.parse(localStorage.getItem("Carrito") === null)) {
          let enviarCarro = [];
          enviarCarro.push(singleProduct);
          localStorage.setItem("Carrito", JSON.stringify(enviarCarro));
          location.reload();
        } else {
          localStorage.clear();
          let enviarCarro = [];
          enviarCarro.push(singleProduct);
          localStorage.setItem("Carrito", JSON.stringify(enviarCarro));
          location.reload();
        }
      }
    });
}

export function obtenerCarroLocalStorage(e) {
  const divCarro = document.getElementById("mostrar-carrito");
  const getCarritoLocal = JSON.parse(localStorage.getItem("Carrito"));
  if (!getCarritoLocal) {
    divCarro.innerHTML = "";
  } else {
    getCarritoLocal.forEach((element) => {
      divCarro.innerHTML += `
              <div class="card">
                  <img src=${element.imagenFront} style="height:300px; object-fit: cover;/>
                  <div class="card-content center-align">
                    <span class="card-title">${element.titulo}</span>
                    <p>Precio: ${element.precio}</p>
                  </div>
              </div>
            `;
    });
  }
}
