


let fechaDia=Number(prompt("ingrese su dia de nacimiento"));
let fechaMes=Number(prompt("ingrese su mes de nacimiento"));
let fechaAnio=Number(prompt("ingrese su año de nacimiento"));
const fechaActualDia=26;
const fechaActualMes=07;
const fechaActualAnio=2022;

    const cuantoFalta= function(a,b,c){
        return ((a-b)*c)};

    let resultado=cuantoFalta(fechaActualAnio,fechaAnio,365);


    if(fechaAnio>2004){
        alert("Vuelva en " + resultado + " dias");
    } else{
        alert("Bienvenido/a a Drink&Drink")
    }
     
