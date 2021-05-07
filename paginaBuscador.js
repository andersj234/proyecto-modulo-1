let url = "https://api.pokemontcg.io/v2/cards/"
let parrafo =""
let resultados =[]
let favoritos =[]
let mostrarCartas
function busquedaCartas(){
  let parrafo2 = "";
  let respuesta = false;
  let buscador = document.getElementById("buscador").value.toLowerCase();
  fetch(url)
  .then(function respuesta(respuesta){
      return respuesta.json()
  }
  ).then(function datos(datos){
    resultados =datos.data
      for (let i = 0; i < datos.data.length; i++) {
        if(datos.data[i].name.toLowerCase() ===buscador.toLowerCase()){
          respuesta = true
           parrafo2 += `
           <div id="carta${i}" class="carta">
           <img src="${datos.data[i].images.small}" alt="${datos.data[i].name}" />
           <h3>${datos.data[i].name}</h3>
           <h5> Tipo: ${datos.data[i].types}  | evolucion de: ${datos.data[i].evolvesFrom} </h5>
           <p> Mayor precio holo-foil: ${datos.data[i].tcgplayer.prices.holofoil.high} $ </p>
           <button onclick="añadirFavoritos(${i})" id="botonFavoritos">añadir a favoritos</button>
           </div>`
        }
      }
  respuesta 
  ? document.getElementById("busqueda").innerHTML = parrafo2
  : document.getElementById("busqueda").innerHTML = `No encuentro una carta con ese nombre`
}
  ) 
  let carta ={}
}

function añadirFavoritos(indice){
 let favorito= {
   imagen: resultados[indice].images.small,
   name: resultados[indice].name,
   type: resultados[indice].types,
   evolucion: resultados[indice].evolvesFrom,
   precio: resultados[indice].tcgplayer.prices.holofoil.high,
 }
 favoritos.push(favorito);
 localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }


  function sacarContenido(){
    let parrafo3 =""
   mostrarCartas =JSON.parse(localStorage.getItem("favoritos"))
   for (let i = 0; i < mostrarCartas.length; i++) {
    parrafo3 += `
    <div id="carta${i}" class="carta">
    <img src="${mostrarCartas[i].imagen}" alt="${mostrarCartas[i].name}" />
    <h3>${mostrarCartas[i].name}</h3>
    <h5> Tipo: ${mostrarCartas[i].type}  | evolucion de: ${mostrarCartas[i].evolucion} </h5>
    <p> Mayor precio holo-foil: ${mostrarCartas[i].precio} $ </p>
    </div>`
   }
   document.getElementById("patata").innerHTML = parrafo3
  }


