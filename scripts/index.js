const API = 'https://backend-principe-fresco.herokuapp.com/camisetas/'

const listarCards = document.getElementById('listarCards')

const getApi = async(url) => {
  const listarApi  = await axios.get(url)
  const { data } = listarApi

  listarCards.innerHTML = ''
  data.forEach(e => {
    const { id,titulo, precio, imagenFront } = e
    listarCards.innerHTML += `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${imagenFront}" alt="${titulo}" style="height:430px; object-fit: cover;">
        </div>
        <div class="card-content center-align">
          <span class="card-title">${titulo}</span>
          <p>${precio}</p>
          <buutton class="btn black" style="margin-top: 12px">Ver Detalle</buutton>
        </div>
      </div>
    </div>
    `
  })
}

getApi(API)

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
})