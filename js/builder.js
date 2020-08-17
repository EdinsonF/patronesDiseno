//CREA UNA ACTACCION PARA ASI ESCRIBIR SOBRE ELLA
//  SIMILAR AL FACTORY

class formulario{
    constructor(){
        this.campos = [];
    }

    agregarCampos(tipo, texto){
        let campos = this.campos;

        let campo;

        switch(tipo){
            case "text":
                campo = new inputText(texto);
                break;

            case "email":
                campo = new inputEmail(texto);
                break;
            
            case "button":
                campo = new Boton(texto);
                break;
            default:
                throw new Error("tipo no instaciado"+ tipo);
        }
        campos.push(campo);


    }

    obtenerFormulario(){
        const form = document.createElement("form");
        let add;
        for(let i = 0; i < this.campos.length; i++){
            const br = document.createElement('br');
            add = this.campos[i];
            form.appendChild(add.crearElemento());
            form.appendChild(br);
        }
        return form;

    }
}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

class inputText extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const elemen = document.createElement('input');
        elemen.setAttribute('type', 'texto');
        elemen.setAttribute('placeholder', this.texto);
        return elemen;
    }
}

class inputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const elemen = document.createElement('input');
        elemen.setAttribute('type', 'email');
        elemen.setAttribute('placeholder', this.texto);
        return elemen;
    }
}

class Boton extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const elemen = document.createElement('button');
        elemen.setAttribute('type', 'submit');
        elemen.textContent = this.texto;
        return elemen;
    }
}


const ele = new formulario();

ele.agregarCampos('text', 'Nombre');
ele.agregarCampos('text', 'Apellido');
ele.agregarCampos('email', 'apodo');
ele.agregarCampos('button', 'Enviar');


document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#app").appendChild(ele.obtenerFormulario());
});



