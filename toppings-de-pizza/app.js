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
// primerTopping.style.color = '#6dfa10'
primerTopping.style.textTransform = 'uppercase'

//Acceso al texto
const listaDeToppings = document.getElementById('lista-toppings')
//  Retorna una cadena de caracteres sin preservar la indentacion del aarchivo HTML
console.log('> innerText')
console.log(listaDeToppings.innerText)
// Retorna una cadena de caracteres con la indentacion que tiene en archivo HTML
console.log('> textContent')
console.log(listaDeToppings.textContent)
//Retorna toda la estructura HTML como una cadena de caracteres
console.log('> innerHTML')
console.log(listaDeToppings.innerHTML)

//PARA MODIFICAR EL TEXTO QUE HAY EN LA PAGINA
const titulo = document.getElementById('titulo')
//Se selecciona el texto a modificar y se iguala a una string con el texto deseado
titulo.innerText = 'Elige tu topping de pizza 🍕'

//MODIFICAR ATRIBUTOS
const enlaces = document.getElementsByTagName('a')
// Como es una coleccion HTML se puede acceder por medio de si indice asi como verificar sus elementos usando el metodo getAttribute()

//Para elimibar el atributo se uriliza el metodo removeAttribute()
//Para asignarle o modificar un valor a un atributo en especifico se utiliza setAttribute()
console.log(enlaces[0].getAttribute('href'))

//Un ejemplo de actualizacion del atributo
// ----->> console.log(enlaces[0].setAttribute('href', nuevo enlace))
//Se escribe el nombre del atributo a modificar segido una coma y el nuevo valor que se desea colocar

//CLASES HTML DESDE JS

//Acceder a las classes del elemto, para acceder a una es especifico (en caso de haber mas de 1) se utiliza el indice y si se quiere toda la cadena se accede con el value.
const primerTopping1 = document.querySelector('.topping')
//para anadir una nueva clase
primerTopping1.classList.add('nueva-clase')

console.log(primerTopping1.classList)

//Para verificar una clase, esto devuleve un booleano. Suele servir para las condicionales.
console.log(primerTopping1.classList.contains('fondo-negro'))

//Para eliminar una clase
primerTopping1.classList.remove('nueva-clase')



