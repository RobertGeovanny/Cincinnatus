//foreach
let numero = [1,2,3,4,5,6,7,8];

/* numero.forEach((value) => {
    console.log(value == 5);
}) */

/* for(i=0; i<numero.length; i++){
    console.log(numero [i]);
} */

/* numero.forEach(function(i){
    console.log(i);
}) */

//some

let numeros = [1,2,3,4,5];

/* console.log(numeros.some((value)=>{
   return(value < 0);
})) */

//every
console.log(numeros.every((value) => {
    return(value == 5);
}));

//map

