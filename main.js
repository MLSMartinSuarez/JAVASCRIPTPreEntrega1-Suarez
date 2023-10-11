// Dando nota de examen a alumnos y segun sus notas dandoles una devolucion

// let NotaExamen = Number(prompt("Ingrese la nota de su examen para decirle cual fue su rendimiento"));

// if (NotaExamen<= 3){
//         alert("Desaprobado - 'Recuperatorio'");
//     }
//     else if (NotaExamen <= 5){
//         alert("Desaprobado - 'Insuficiente'");
//     }
//     else if (NotaExamen == 6){
//         alert("Aprobado - 'Bien'");
//     }
//     else if (NotaExamen <= 8){
//         alert("Aprobado - 'Muy bien'");
//     }
//     else if (NotaExamen == 9){
//         alert("Aprobado - 'Excelente'");
//     }
//     else if (NotaExamen == 10){
//         alert("Aprobado - '¡Sobresaliente!'")
//     }
//     else{
//         alert("Calificacion Erronea, su nota debe figurar como un numero de 0 al 10")
//     }

    // Adivinanza usando switch

    alert("Hagamos un juego! te dire 3 adivinanzas, solo tienes una oportunidad asi que piensalo bien, solo ganaras si respondes bien las 3 :)")

    let adivinanza = prompt("Que sube y no baja");

   switch (adivinanza){

        case "una escalera":
        alert("Correcto!!");
        break;

        default:
        alert("Error!, vamos con el proximo")
        break;
    }
    

let adivinanza2 = prompt("Soy pequeña y de madera y si me rozan me enciendo, ¿qué soy?");

    switch (adivinanza2){

        case "un fosforo":
        alert("Correcto, sigue asi!!");
        break;

        default:
        alert("Equivocado, queda el ultimo")
        break;
}   

let adivinanza3 = prompt("Tengo agujas pero no puedo coser. ¿Qué soy?");

    switch (adivinanza3){

        case "un reloj":
        alert("Correcto!");
        break;

        default:
        alert("Equivocado")
        break;
} 

alert("vamos a sumar tus puntos, anotate 1 punto por cada correcta")

if(adivinanza == ("una escalera")){
    alert("la primera estuvo correcta, sumate 1 punto")
}

else if(adivinanza != ("una escalera")){
    alert("una pista para que vuelvas a intentar la primera, puedo ser de madera o de metal")
}

if(adivinanza2 == ("un fosforo")){
    alert("la segunda estuvo correcta, sumate 1 punto")
} 

else if(adivinanza2 != ("un fosforo")){
    alert("una pista para que vuelvas a intentar la segunda, lo unico que se enciende es mi extremo y es de color rojo")
}

if(adivinanza3 == ("un reloj")){
    alert("la tercera estuvo correcta, sumate 1 punto")
}
else if(adivinanza3 != ("un reloj")){
    alert("una pista para que vuelvas a intentar la tercera, puedo ser de pared, de mano o hasta de mesa")
}

else{
    alert("hubo un error, vuelvelo a intentar, no coloques ningun numero por favor")
}

alert("espero que te hayas divertido, si sumaste 3 puntos, ganaste, sino, vuelvelo a intentar con las pistas que te di!")


        





