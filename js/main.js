//El profesor ingresa las notas del primer y segundo cuatrimestre de 10 alumnos de la carrera desarrollo backend
const bienvenido= () =>{
    alert(' Bienvenido profesor ' + nombre);
    }

class Alumno{ //creo un array para cargar los datos de los alumnos
    constructor(nombre,legajo, primercuatri,segundocuatri){
        this.nombre=nombre;
        this.legajo=legajo;
        this.primercuatri=primercuatri;
        this.segundocuatri=segundocuatri;     
    }
    infoAlumno () { // creo un metodo que muestre la informacion del alumno y a su vez calcule el promedio
        return prompt('nombre: ' + this.nombre + '\nnumero de legajo: '+ this.legajo + '\npromedio: ' + (this.primercuatri + this.segundocuatri)/2) ;
    }
}

let nombre= prompt(' Ingrese su nombre');
bienvenido();
const alumnos= [];
for(let i=0;i<10;i++){ // el profesor-usuario- carga la info de los 10 alumnos
    alumnos.push(new Alumno (prompt('ingrese nombre del alumno: '), parseInt(prompt('ingrese numero de legajo')), parseFloat(prompt('ingrese nota del primer cuatrimestre')),parseFloat(prompt('ingrese nota del segundo cuatrimestre'))));

}
for(const alumno of alumnos){ // recorro el array e informo el nombre, el legajo y el promedio
    alert(alumno.infoAlumno());
}
