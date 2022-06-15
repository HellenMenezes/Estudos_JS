/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C 

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C 
* entre 60 - 69 - D
* menor que 60 - F

*/

let notasescolares = 67;
let notaA = notasescolares >= 90;
let notaB = notasescolares >= 80;
let notaC = notasescolares >= 70;
let notaD = notasescolares >= 60;
let notaF = notasescolares < 60 && notasescolares >= 0;

    if(notaA) {
        console.log("Sua nota é A");
    }
    else if(notaB){
        console.log("Sua nota é B");
    }
    else if(notaC){
        console.log("Sua nota é C");
    }
    else if(notaD){
        console.log("Sua nota é D");
    }
    else if(notaF){
        console.log("Sua nota é F");
    }
    else {
        console.log("Nota inválida");
    }