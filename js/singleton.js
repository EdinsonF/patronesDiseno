//DEFINE TODAS LAS FUNCIONES DE UN OBJETO EN UNA SOLA INSTANCIA

const alumnos = {
    listaAlumnos : [],


    //obtener
    get : function(id){
       return this.listaAlumnos[id];
    },

    //crear
    crear : function(datos){
        this.listaAlumnos.push(datos);
    },

    lista : function(){
        return this.listaAlumnos;
    }


}

const infoAlumnos = {
    nombre : 'Edinson',
    edad   : 26
}

const infoAlumnos2 = {
    nombre : 'Yonder',
    edad   : 21
}

alumnos.crear(infoAlumnos);
alumnos.crear(infoAlumnos2);



const listar = alumnos.lista();
console.log(listar);


const id = alumnos.get(0);

console.log(id);