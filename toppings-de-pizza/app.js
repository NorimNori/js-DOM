const contenedor = document.getElementById('contenedor')
//innerHTML da acceso a la estructura que esta contenida dentro de ese elemento
//innerText retorna el elemnto contenido dentro de ese elemento 
//Ambos retornan una cadena de caracteres
//tagName retorna el tipo de etiqueta del elemento, en caso de que haya ,as de un elemento retorna el primero que encuentra 
console.log(contenedor.innerHTML)

//Cuando se trata de clases usar plurar para hacer notar que se trara de varios elementos. Prara acceer a un elemento especifico del array usar la notacion de lo arrays toppings[0] ---> aceitunas
//Esta proppiedad retorna una coleccion HTML que es parecida a un arreglo
const toppings = document.getElementsByClassName('topping')
console.log(toppings)

//Para seleccionar medianta la etiqueta html que de igual manera retorna una coleccion HTML
const misToppings = document.getElementsByTagName('li')
console.log(misToppings)

//Selecciona un elemento que cumple un criterio de un selector css, sirven para cuando es encesario un proceso de sellecion mas especifico. devielve un objeto al igual que los metodos anteriores.
//.querySelector --> permite seleccionar el primer elemento que cumpla ese criterio
//.querySelectorAll selleciona a todos los elementos que cumplan con ese criterio

//Para seleccionar por medio del id se utiliza el simbolo #segido del nombre del id y entre comillas.
//Devuelve el primer elemento que coincida con la(s) clase(s).
const aceitunas = document.querySelector('#aceitunas')
console.log(aceitunas)

//Para seleccionar por medio de una clase se hace igual pero sustituyendo el # por un punto

//Tambien se pude buscar el primer elemento con untipo de clase seguido de otra
//Otra forma mas elavorada para seleccionar el mismo elemento seri ('ul li.fondo-naranja') otro ejemplo seri ('ul li:not(.fondo-marron')
//Donde :not(x) te permite en css descartar los elementos que tengan esa clase o caracteristica.
const primerToppingNaranja = document.querySelector('.topping.fondo-naranja')
console.log(primerToppingNaranja)

// Retorna una lista de nodos como un objeto que incluye todos los elementos que cumplen ese criterio
const toppingsNaranja = document.querySelectorAll('.topping.fonfo-naranja')
console.log(toppingsNaranja)

////  ESTILOS CON JS

const primerTopping = document.querySelector('.topping')

//Se pueden anadir usando la notacion de punto ya que el metodo devuelve un objeto y todos contaran con la propiedad style. Siempre se usa camelCase para escribir los estilos.

primerTopping.style.backgroundColor = 'blue'
primerTopping.style.color = '#6dff00'
primerTopping.style.textTransform = 'uppercase'