//Ejercicio Nro 1********************************************************************************
function evaluaedadparimpar(nroveri)
{
   if (nroveri % 2 == 0) //evalua si es resto es 0=par o 1=impar
   {
      console.log('El Numero es PAR');
   } else  {
      console.log('El Numero es IMPAR');
   }
 }
 let nroveri = 7;
 evaluaedadparimpar(nroveri);

//fin ejercicio Nro 1**************************************************************************************

//Ejercicio Nro 2*****************************
function evaluanumero(nroveri)
{
   if (nroveri > 0) //evalua si es es mayor que 0
   {
      console.log('El Numero es POSITIVO');
   } else  {
       if (nroveri < 0) //evalua si es menor a 0
       {
        console.log('El Numero es NEGATIVO'); 
       } else { 
        console.log('El Numero NO es NEGATIVO, NI POSITIVO'); //si es igual a 0   
        }
   }
 }
 
 let nroveri = 7;
 evaluanumero(nroveri);

//fin ejercicio Nro 2*****************************************************************************

//Ejercicio 3***************
function evaluacadena(cadenaveri)
{
   if (cadenaveri.length > 10) //evalua si es es mayor que 10 caracteres
   {
      console.log('Cadena con longitud LARGA');
   } else  {
      { 
        console.log('Cadena con longitud CORTA'); //si es igual a menor 10   
      }
   }
 }
 
let cadenaveri = 'cadenatexto';
evaluacadena(cadenaveri);
 //Fin Ejercicio 3***************************************************************************************

//Ejercicio 4***************
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let indice = 0; indice < array.length; indice++) {
    console.log(array[indice]);
}
//Fin Ejercicio 4***************
///Ejercicio5
var array = ['Juan','Jose','Pedro']  
for (let indice = 0; indice < array.length; indice++) {
    document.write(array[indice] + '<br>');
}
///Fin ejercicio5*************************************************************************

//Ejercicio 6***************
var array = [17, 28, 31, 46, 55, 60, 44, 29, 39, 30]
var sumaedades = 0;
var canelementos = array.length;
for (let indice = 0; indice < array.length; indice++) {
    sumaedades=sumaedades+array[indice];
}
console.log(sumaedades/canelementos);
//Fin Ejercicio 6*****************************************************************************

//Ejercicio 7***************
var array = ['Amarillo','Verde','Azul','Rojo','Negro']
for (let indice = 0; indice < array.length; indice++) {
    console.log(array[indice]);
}
//Fin Ejercicio 7*********************************************************************************

///Ejercicio8**********
var array = ['Uva', 'Manzana', 'Banana', 'Naranja', 'Melon']    
for (let indice = 0; indice < array.length; indice++) {
    document.write(array[indice] + '<br>');
}
///Fin ejercicio8*********************************************************************************

//Ejercicio 9***************
var array =  [1, 4, 6, 7, 20, 18] 

for (let indi = 0; indi < array.length; indi++) {
    for (let indice1 = 0; indice1 < array.length; indice1++)
    {
        if (array[indice1] > array[indice1+1])
        {
            const auxiliar=array[indice1];
            array[indice1]= array[indice1+1];
            array[indice1+1]=auxiliar;
        } 
    }
}
for (let indice = 0; indice < array.length; indice++) {
    document.write(array[indice]+'<br>');
 } 

//Fin Ejercicio 9************************************************************************************

//Ejercicio 10**************
function sumarNumerosPares(nroentero)
{
   for (let indice = 1; indice < nroentero; indice++) {
       if (indice % 2 == 0)
        {
           elementos = elementos + indice;
        }
    }
}
var elementos = 0;
var nroentero = 15;
sumarNumerosPares(nroentero);
console.log(elementos);
//Fin Ejercicio 10*************************************************************************************

//Ejercicio 11**************
function calcularImpuestos(montodinero)
{
    if (montodinero > 1000 || montodinero == 1000)
        {
            impuesto = (montodinero * 0.2 );
    } else {
            impuesto = (montodinero * 0.1 );
        }
    }
var impuesto = 0;
var montodinero = 999;
calcularImpuestos(montodinero);
console.log(impuesto);
//Fin Ejercicio 11**********************************************************************************

//Ejercicio 12**************
function contarVocales(varVocales)
{
    for (let indice = 0; indice < varVocales.length; indice++)
    {
        let vocal = varVocales.substring(indice,indice+1);
        if (vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u")
                   cuentavocales = cuentavocales + 1;
    }
}    
var cuentavocales = 0;
var varVocales = "cadenaprueba";
contarVocales(varVocales);
console.log(cuentavocales);
//Fin Ejercicio 12***********************************************************************************