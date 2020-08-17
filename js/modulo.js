//module pattern
//lo que esta en el ifi se queda alli, a menos q retornes el valor y ahi si le des permiso de acceder

const comprarBoletos = (function(){

    //PRIVADO
    let evento = "Chayanne en concierto";
    const compra = () =>{
        const parrafo=document.createElement('p');
        parrafo.textContent=`Comprando bolestos para:${evento}`;
        document.querySelector("#app").appendChild(parrafo);
    }

    //PUBLICO
    return {
        mostrarBoleto: function(){
            compra();
        }
    }
})();

comprarBoletos.mostrarBoleto();