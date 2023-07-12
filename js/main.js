//If normal
let today = new Date();
let seconds = today.getSeconds();
console.log(seconds);

if ((seconds%2)==0) {
    console.log("Par");
} else{
    console.log("Impar");
}
//Mismo proceso, pero con IF ternario
let msg = ((seconds%2)==0)?"PAR":"IMPAR";
console.log(msg);

let age=21;
let access;
if (age>=18){
    access = true;
} else {
    access = false;
}
console.log(age);
console.log(access);
//Diferentes formas de hacer la comparación
access = (age>=18)?true:false;
console.log(access);

access = (age>=18);
console.log(access);

/* function businessHours(dayNumer, hourNumber){
    dayNumer=4
    hourNumber=20
    if ((dayNumer>=1) && (dayNumer<=5))
    {
        if ((hourNumber>=9) && (hourNumber<=18)){
            console.log("Es bussiness Hours")
        }
    }
   else{
    console.log("No es bussiness Hours")
   }
   return dayNumer;
} */

//Parte1
function businessHours(dayNumer, hourNumber){
    if ((dayNumer>=1) && (dayNumer<=5))
    {
        if ((hourNumber>=9) && (hourNumber<=18))
        {
            return true;
        }
    } else {
        return false;
    }
}
//Parte 2
function getDayNumber(janFirstDayNumber,yearDayNumber){
   return (janFirstDayNumber+(yearDayNumber-1)) %7;
}
    console.log(getDayNumber(2,30));


// Parte 3
function parte3(yearDayNumber, hourNumber){
    let day= getDayNumber(0,yearDayNumber);
    return businessHours(day, hourNumber)
}
console.log("Es dia habil?", parte3(77,14));


/* if ((businessHours=true) && (getDayNumber<=365)){
    console.log("It is bussiness hours")
}else{
    console.log("Is not bussines hours");
}
 */

function formula(a,b,c){

    let resultado;
let raiz;
let b1;
b1=((b*b)-(4*(a*c)));
raiz= Math.sqrt(b1);
resultado=(-b+(raiz))/(2*a)
return resultado;

}
console.log(formula(1,3,-10));