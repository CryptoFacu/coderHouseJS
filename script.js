
// Función con un prompt que pida 5 números y te devuelva el promedio
let confirmacionAgain = function(){
    let confirmacion = confirm("Querés que te calcule otro número?")
    if(confirmacion){
        promedio()
    } else {
        alert("Bueno, nos vemos la próxima!!")
    }
}

let promedio = function(){
    let numeros = []
    let numerosSuma = 0

    for(let i = 0; i<5; i++){
        let valor = parseInt(prompt("Ingrese el número " + (i+1) + ":"));
        if (!isNaN(valor)){
            numeros.push(valor)
            numerosSuma += valor
        } else {
            alert("Ingrese un número válido")
            return
        }
    }

    let promedio = numerosSuma / numeros.length

    alert("El promedio de los números ingresados es: " + promedio)
      
    confirmacionAgain()
}



let respuesta = prompt("¿Querés tener un promedio de los números?").toLowerCase()
if (respuesta == "si"){
    promedio()
} else {
    alert("Bueno... no te paso el promedio entonces. U.U")
}
