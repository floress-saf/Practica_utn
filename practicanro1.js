//Ejercicio Nro 1*****************************

var vnombre = "Matias Rodriguez";
var vocupacion = "Desarrollador";
var vedad = "25 años";
var cadena = vnombre + ' ' + vocupacion + ' ' + vedad;
console.log(cadena);

//fin ejercicio Nro 1**************************

//Ejercicio Nro 2*****************************
function evaluaedadmatias(vedad)
{
 if (vedad === 25)
  {
    console.log('El usuario tiene 25 años');
  } else {
    console.log('El usuario no coincide con la edad ingresada');
  }
}
let vedad = parseInt(prompt('Ingrese Edad de Matias:'));
evaluaedadmatias(vedad);

//fin ejercicio Nro 2**************************

//Ejercicio Nro 3  *****************************
function escribir()
{
   var text = document.createTextNode(".Creado por Sergio Flores");
   document.getElementById("contenedor").appendChild(text);
}
escribir();

//fin ejercicio Nro 3 **************************
//Ejercicio Nro 4*****************************

var vcaja = 100;
var viva = 16;

function calculavalorcaja(vcaja, viva)
{
  var valototal = vcaja + viva;
  console.log('El Total del valor de la CAJA es :' + valototal);
}
calculavalorcaja(vcaja,viva);

//fin ejercicio Nro 4**************************
//Ejercicio Nro 5*****************************
function evaluaedadparimpar(nroveri)
{
   if (nroveri % 2 == 0) //evalua si es resto es 0=par o 1=impar
   {
      console.log('El Numero es PAR');
   } else  {
      console.log('El Numero es IMPAR');
   }
 }
 let nroveri = parseInt(prompt('Ingrese el Numero a verificar:'));
 evaluaedadparimpar(nroveri);

//fin ejercicio Nro 5**************************
//Ejercicio Nro 7**************************
for (let index = 1; index <= 20; index++) {
       
    if (((index % 5) == 0) && ((index % 3) == 0)) //evalua si es resto es 0=par o 1=impar
    {
        console.log('FizzBuzz');
    } else {
        if ((index % 3) == 0) //evalua si es resto es 0=par o 1=impar
        {
            console.log('Fizz');
        } else {
            if ((index % 5) == 0) //evalua si es resto es 0=par o 1=impar
            {
                console.log('Buzz');
            } else console.log(index);
        }

    }
}
//fin ejercicio Nro 7**************************
//Ejercicio 8**********************
var suma = 0;
for (let index = 1; index <= 100; index++) {
  suma = suma + index;
}
console.log('La Suma de los 100 numero es: '+suma);
//Fin Ejercicio 8**********************

//Ejercicio 9***************
var array = [2, 8, 5, 9, 6, 7, 14, 9]
for (let indice = 0; indice < array.length; indice++) {
    console.log(array[indice]);
}
//Fin Ejercicio 9***************
// Ejercicio 10 ****************************
var array = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var elementos = 0;
function evaluaarray(array)
{
   for (let indice = 0; indice < array.length; indice++) {

       elementos = elementos+ array[indice].length;
    }
}
evaluaarray(array);
console.log(elementos);
// Fin Ejercicio 10 ****************************