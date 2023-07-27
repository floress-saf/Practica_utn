// ejecicio 1
function sumaTodosImpares(array) {
    // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
    // y debe devolver la suma total entre todos los numeros impares.
    // ej:
    // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
    // Tu código aca:
    for (let indice = 0; indice < array.length; indice++) {
      if (array[indice] % 2 !== 0)
       {
          elementos = elementos + array[indice];
       }
      }
  };
  var array = [1, 5, 2, 9, 6, 4]
  var elementos = 0;
  sumaTodosImpares(array);
  console.log(elementos);
  
  // ejecicio 2
  //-----------------------------------------------------------------------------------------------------------------------
  function stringMasLarga(str) {
    // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
    // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
    // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
    // Tip: podes usar el metodo de String 'split'
  
    // Tu código aca:
    let arraystr = cadenastr.split(' ');
    let lonpalabra = 0;
    
    for (let indice = 0; indice < arraystr.length; indice++) {
      if (arraystr[indice].length > lonpalabra)
       {
        palabra = arraystr[indice];
        lonpalabra = arraystr[indice].length;
       }
    }

  } 
  var cadenastr = 'Ayer fui a pasear a una plaza'; 
  var palabra = '';
  stringMasLarga(cadenastr); 
  console.log(palabra);
  
  // ejecicio 3
  function estaOffline(usuarios, nombre) {
    // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
    // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
    // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
    // ej:
    // estaOffline(usuarios, 'agus') retorna true
    // estaOffline(usuarios, 'emi') retorna false
    usuarios.forEach(object =>{
    if (object.nombre === nombre) {
          console.log("ONline:", object.online);
    }
  });
  }
  // Tu código aca:
  var usuarios = [
      {
      nombre: 'toni',
      online: true
      },
     {
      nombre: 'emi',
      online: true
     },
     {
      nombre: 'agus',
      online: false
      }
    ];
  estaOffline(usuarios,'toni');
  
    //-----------------------------------------------------------------------------------------------------------------------
  // ejecicio 4
    function actividadesEnComun(persona1, persona2) {
    // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
    // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
    // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
    //     persona2 = ['comer', 'dormir', 'futbol']
    // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
    // Tip: podes usar ciclos for anidados.
    // Tu código aca:
    let actividad1 = '';
    for (let indice = 0; indice < persona1.length; indice++) {

      actividad1 = persona1[indice];
      
      for (let indice1 = 0; indice1 < persona2.length; indice1++){
        if (persona2[indice1] == actividad1) {
          comun.push(actividad1);
          }
      }
    }
  }
  var persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
  var persona2 = ['comer', 'dormir', 'futbol'];
  var comun = [];
  actividadesEnComun(persona1, persona2);
  console.log(comun);
  //-----------------------------------------------------------------------------------------------------------------------
  // ejecicio 5
  function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    var newarreglo =arreglo.filter(function(f) { return f !== num })
    console.log(newarreglo)
  }
  var arreglo = [1, 2, 3, 4, 1];
  var num = 1;
  buscaDestruye(arreglo, num);
  //-----------------------------------------------------------------------------------------------------------------------
  
// ejecicio 6  
function sumaDeArrays(array) {
      // El array recibido por parametro es un array multidimencional con array's que 
      //contienen elementos de tipo number
      // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
      // Sumando los elementos de cada array que contenga dos elementos,
      // y devolviendo la suma del mismo
      // OJO: Si el elemento dentro del array que ingresa por prop,
      //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
      //let a = [[5, 5], 4, [10, 15], [25, 10]].
    for (let indice = 0; indice < array.length; indice++) {
      let suma = 0;
      if (array[indice].length > 0) {
        for (let j = 0; j < array[indice].length; j++) {
        suma = suma + array[indice][j];
        }
      } else {
        suma =array[indice,1]
      }
      array[indice] = suma;
    }
  };
let array = [[5, 5, 7], 4, [10, 15], [25, 10]];
sumaDeArrays(array);
console.log(array);
    
  //-----------------------------------------------------------------------------------------------------------------------
 // ejecicio 7 
  function mismoValorMismosElementos(numero, divisor) {
      // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
      // Todos los elementos deben tener el mismo valor
      // OJO: Si el resultado de la division no es un entero, deben devolver false
     
        if (numero % divisor !== 0) {
          return false;
        }
      
        const resultadoDivision = numero / divisor;
        const arrayResultado = new Array(divisor).fill(resultadoDivision);
      
        return arrayResultado;
  }; 
let numero = 10;
let divisor = 4;
mismoValorMismosElementos(numero, divisor);


  //-----------------------------------------------------------------------------------------------------------------------
 // ejecicio 8  
function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array",
  // pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  const miArray = [1, 2, 3, 4, 5];
  for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
  }
  }
   
  //-----------------------------------------------------------------------------------------------------------------------
 // ejecicio 9  
  function filtrado(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    const result = array.filter(word => word.substring(0, 1) =='a' );
    console.log(result);
  }
    let array = ['anana', 'banana', 'manzana', 'naranja', 'uva', 'almendra'];
    filtrado(array);    

  
  //-----------------------------------------------------------------------------------------------------------------------
 // ejecicio 10  
function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
  
  // Tu código aca:
  const arr = ['moto', 'auto', 'auto', 'camioneta', 'moto', 'auto'] 
  const resultado = arr.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 0), prev), {})
  console.log(resultado);
  };
  
// ejecicio 11

function creardato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código: 
   
      const nuevoObjeto = {
        nombre: nombre,
        edad: edad,
        meow: function() {
          return "Meow!";
        }
      };
    return nuevoObjeto;
}
const midato =creardato("Sergio", 10);
console.log(midato.meow()); // Imprimirá: "Meow!"

 // ejecicio 12
  function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto 
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código: 
    //objeto [property]= null;  
    const objeto = [ { property: null}];
    return objeto;
  } 
  
  
  // ejecicio 13
  function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
   
  // ejecicio 14 
  
  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
    let objetoMisterioso = {
        numeroMisterioso: 5,
        CMultiplica: function (numeroMisterioso) {
        let multi = 0;
        multi = numeroMisterioso * 5;
        return multi;
        }
    }
  }
  let objetoMisterioso = 0;
  multiplicarNumeroDesconocidoPorCinco(objetoMisterioso)
  
  // ejecicio 15
  function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
    // tip: tenes que usar bracket notation = Notacion de corchetes. 
    // Devuelve el objeto 
    // Tu código:
    delete objeto[unaPropiedad];
  }
  const objeto = {
    nombre: "Sergio",
    edad: 40,
    ocupacion: "Analista"
  };
  eliminarPropiedad(objeto, "ocupacion");
  console.log(objeto); 
    
  // ejecicio 16
  function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los 
    // argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let nuevobjeto = {
      nombre:nombre,
      email:email,
      password:password
    }
    return console.log(nuevobjeto);

  }
  let nombre = 'Sergio';
  let email = 'nada@prueba.com';
  let password = '1234';
  nuevoUsuario(nombre, email, password);
  
  // ejecicio 17
  function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código
    const nuevobjeto = [
      { usuario : "Sergio", email:"sergio@prueba.com" },
      { usuario : "Juan", email:"juan@prueba.com"},
      { usuario : "Pedro" }];
    
    for (const elemento of nuevobjeto) {
      if (elemento.usuario === usuario) {
        return elemento.hasOwnProperty('email');
      }
    }
  } 
  console.log(tieneEmail("Pedro"));


 // ejecicio 18 
  function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
    // cuyo nombre es igual al valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:
    for (const elemento of objeto) {
      if (elemento.key === propiedad) {
        return true;
      } else { return false; }
    }
  }
  const objeto = [
    { key : 'clave' }];  
  console.log(tienePropiedad(objeto, 'claves'));  
    
  // ejecicio 19
    function verificarPassword(usuario, password) {
      // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
      // Devuelve "true" si coinciden
      // De lo contrario, devuelve "false"
      // // Tu código: 
      const nuevobjeto = [
        { usuario: "Sergio", opassword: "sergio" },
        { usuario: "Juan", opassword: "juan" },
        { usuario: "Pedro", opassword: "pedro" }];
    
      for (const elemento of nuevobjeto) {
     
        if (elemento.opassword === password) {
          return true;
        }
        return false;
      }
      console.log(verificarPassword('Juan', 'juan'));
     
      // ejecicio 20
      function actualizarPassword(usuario, nuevaPassword) {
        // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
        // Devuelve el objeto
        // Tu código:
        const nuevobjeto = [
          { usuario: "Sergio", opassword: "sergio" },
          { usuario: "Juan", opassword: "juan" },
          { usuario: "Pedro", opassword: "pedro" }];
    
        for (let i = 0; i < nuevobjeto.length; i++) {
        
          if (nuevobjeto[i].usuario === usuario) {
            nuevobjeto[i].opassword = nuevaPassword;
          }
        }
        console.log(nuevobjeto);
      }
      console.log(actualizarPassword('Juan', 'juani'));
  
      // ejecicio 21
      function agregarAmigo(usuario, nuevoAmigo) {
        // "usuario" tiene una propiedad llamada "amigos" que es un array
        // Agrega "nuevoAmigo" al final de ese array
        // Devuelve el objeto "usuario"
        // // Tu código: 
        const nuevoamigo = { nombre: nuevoAmigo };
        usuarios.push(nuevoamigo);
        //console.log(usuario);
      }
      const usuario = [
        { amigo: "Sergio" }];
      agregarAmigo(usuario, 'Pedro');
    
    
      // ejecicio 22
      function pasarUsuarioAPremium(usuarios) {
        // "usuarios" es un array de objetos "usuario"
        // Cada objeto "usuario" tiene la propiedad "esPremium"
        // Define cada propiedad "esPremium" de cada objeto como "true"
        // Devuelve el  array de usuarios
        // Tu código: 
        for (let i = 0; i < usuarios.length; i++) {
          usuarios[i].esPremium = true;
        }
        console.log(usuarios);
      }
      const usuarios = [
        { usuario: "Sergio" },
        { usuario: "Juan" },
        { usuario: "Pedro" }];
      pasarUsuarioAPremium(usuarios);
      
      
      
      // ejecicio 23
      function sumarLikesDeUsuario(usuario) {
        // "usuario" tiene una propiedad llamada "posts" que es un array
        // "posts" es un array de objetos "post"
        // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
        // Suma todos los likes de todos los objetos "post"
        // Devuelve la suma
        // Tu código: 

      }
      sumarLikesDeUsuario(usuario)
      
      // ejecicio 24
      function agregarMetodoCalculoDescuento(producto) {
        // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
        // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
        // El método resta el descuento del precio y devuelve el precio con descuento
        // Devuelve el objeto "producto" al final de la función
        // Ejemplo:
        // producto.precio -> 20
        // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
        // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
        // Tu código:
          return producto.precio - producto.precio * (producto.descuento / 100)
          
        }
        //console.log(producto);
        const producto = {
        nombre: "Harina",
        precio: 150,
        descuento: 5
        }
         console.log(agregarMetodoCalculoDescuento(producto));

  //-------------------------------------------Interacción con el DOM--------------------------------------------------------
  // En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
  // Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
  // agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
  // Tu código acá: 
<!DOCTYPE html>
<html>
<head>
  
</head>
<body>
  <span id="createdBy">Aplicación creada por:</span>
  <script>
        const spanCreatedBy = document.querySelector("#createdBy");
        const miNombre = "Franco";
        spanCreatedBy.innerHTML += " " + miNombre;
  </script>
</body>
</html>
  //-----------------------------------------------------------------------------------------------------------------------
  
  // La función debe realizar lo siguiente:
  //    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
  //    2) Asignarle a 'toDoShell' la clase 'toDoShell'
  //    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
  //    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
  //       asignándole el valor de la propiedad 'description' del objeto ToDo.
  //    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
  //    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
  //          - Si es true: asignarle a 'toDoText' la clase 'completeText'
  //          - Si es false: no asignarle ninguna clase
  //    7) Agregar 'toDoText' como hijo de 'toDoShell'
  //    8) Devolver la variable toDoShell
  
  
  function buildToDo(todo, index) { //todo es un objeto de la clase TODO. //index numerico 
    // Tu código acá:
   
    // Consigna 3
   
    // Consigna 4
    
    // Consigna 5
   
    // Consigna 6
   
    // Consigna 7
    
    // Consigna 8
    
  
  }
  
  //-----------------------------------------------------------------------------------------------------------------------
  
  // La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
  //  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
  //  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
  //  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
  //  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
  //  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
  //  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página
  
  function displayToDos() {
  // Tu código acá:
  //Paso 1; 
   
  // Paso 2: 
    
  // Paso 3;
  
   //Paso 4; 
  
   
  
  }; 
  
  //-----------------------------------------------------------------------------------------------------------------------