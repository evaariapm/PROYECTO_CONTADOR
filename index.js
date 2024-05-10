let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el");
console.log(countEl)


let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function decrement() {
    if (count > 0)
    count = count - 1  
    countEl.innerText = count
}


function save () {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


function reset() {
    count = 0;                   
    countEl.innerText = count
    saveEl.textContent = "Entradas anteriores: "
}


function venta(ciudad, precio) {
    let cantidadBilletes = document.getElementById('billete-' + ciudad);
    console.log(cantidadBilletes)
    let precioFinal = document.getElementById('precio-final-' + ciudad);
    console.log(precioFinal)
    let cantidad = cantidadBilletes.valueAsNumber
    let total = precio * cantidad;
    precioFinal.textContent = total + ' €'
}



