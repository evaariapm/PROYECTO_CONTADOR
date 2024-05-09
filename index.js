//1. document.getElementById("count-el").innerText = 5 //lo que hace es que el 0 que tenemos en el h2 se igual a 5 modificar el contenido interno de un elemento de Texto

//Aquí, iniciamos el conteo como 0.
//El código que va antes de count es posterior al punto 1, NO EJECUTAR

let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el");
console.log(countEl)

//Este count-el lo tomamos del index.html, del h2
let count = 0
//Utilizamos la funcion de incrementar con la que hemos trabajado, comenzando en 0
function increment() {
    //Queremos que nuestra app funcione como un contador de mano, de manera que sume +1
    count = count + 1
    //Por último, pillamos la variable countEl, la cual selecciona por id el elemento h2
    //Con innerText, establecemos/obtenemos el contenido del texto
    countEl.innerText = count
}


//Se realiza una funcion igual que la anterior pero para el nuevo boton de restar.
//En este caso la funcion es decrement.
function decrement() {
    //Queremos que nuestra app funcione como un contador de mano, igual que sume queremos que reste -1
    count = count - 1
    //Por último, pillamos la variable countEl, la cual selecciona por id el elemento h2
    //Con innerText, establecemos/obtenemos el contenido del texto
    countEl.innerText = count
}

//Creame un boton save() que carga la cuenta fuera del contador
//y un save button en el html llamado save-btn, ve a index.html
function save () {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//Creación tabla con el calculo total de entradas

let precioFinal = document.getElementById("precio-final") 

function calculoTotal (){
    let billetes = 5
    let precioBillete = 50
    let total = billetes * precioBillete
}
