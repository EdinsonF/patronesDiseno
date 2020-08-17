// CONSISTE EN DARLE FLEXIBILIDAD AL CODIGO, PARA NO CASARLO CON UNA SOLA FUNCIONALIDAD EN ESPECIFICO

/* function constructorSitio(){
    this.crearElemento = function(texto, tipo){

        let html;
        if(tipo === 'input'){
            html = new inputHTML(texto);
        }else if(tipo === 'img'){
            html = new imgHTML(texto);
        }else if(tipo === 'h1'){
            html = new headingHTML(texto);
        }else if(tipo === 'p'){
            html = new parrafoHTML(texto);
        }

        html.tipo = tipo;

        //crea los elementos
        html.mostrar = function(){

            const elemento = document.createElement(this.tipo);

            if(this.tipo === 'input'){
                elemento.setAttribute('placeholder', this.texto);

            }else if(this.tipo === 'img'){
                elemento.setAttribute('src', this.texto);
            }else if(this.tipo === 'p'){
                elemento.appendChild(document.createTextNode(this.texto));
            }else if(this.tipo === 'h1'){
                elemento.appendChild(document.createTextNode(this.texto));
            }

            document.querySelector("#app").appendChild(elemento);
        }

        return html;
    }

       
}




const inputHTML = function(texto){
    this.texto = texto;
} 
const imgHTML = function(texto){
    this.texto = texto;
}
const headingHTML = function(texto){
    this.texto = texto;
}
const parrafoHTML = function(texto){
    this.texto = texto;
}

const construir = new constructorSitio();

const elementosCreados= [];

elementosCreados.push(construir.crearElemento('Imagen.jpg', 'img'));
elementosCreados.push(construir.crearElemento('BIENVENIDOS', 'h1'));
elementosCreados.push(construir.crearElemento('Aprendiendo Factory', 'h1'));
elementosCreados.push(construir.crearElemento('patrones de diseño', 'p'));
elementosCreados.push(construir.crearElemento('constactanos', 'input'));
elementosCreados.push(construir.crearElemento('constactanos', 'input'));


elementosCreados.forEach(elem => {
    elem.mostrar();
})


console.log(elementosCreados); */


//INTENTANDO LO MISMO CON CLASES

class crearElementos{
    

    comparar(tipo, texto){
        const elem =  document.createElement(tipo);
        let html ;
        if(tipo === 'input'){
            html = new input(texto);
            elem.setAttribute('placeholder', texto);
        }else if(tipo === 'img'){
            html = new img(texto);
            elem.setAttribute('src', texto);
        }
        document.querySelector("#app").appendChild(elem);

        html.tipo = tipo;


        return html;
    }

}



//tipos de elementos
class input{
    constructor(texto){
        this.texto = texto;
    }
}

class img{
    constructor(texto){
        this.texto = texto;
    }
}


class parrafo{
    constructor(texto){
        this.texto = texto;
    }
}


const instancia = new crearElementos();

const  elemento = []

elemento.push(instancia.comparar('input', 'nombre'));
elemento.push(instancia.comparar('input', 'apellido'));
elemento.push(instancia.comparar('img', 'logo.png'));


elemento.forEach(ele => {
    ele
})
console.log(elemento);