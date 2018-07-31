let oDatos = { precio: 12, iva: 1.16 };

oDatos.calculaIvaAsync = function () {
    //Si usamos el this sin una función arrow, no tendrían valor las variables precio e iva porque son parte del 
    //objeto cuando se está ejecutando pero cuando se ejecuta la funcion setTimeOut es en otro momento estando en otro marco de referencia
    //por lo que el valor no existe
    setTimeout( () => {
        let precioFinal = this.precio * this.iva
        console.log(`       
        Usando una función clásica:        
        El precio final es ${precioFinal.toFixed(2)
            }
        `);
    }, 1000)
}


oDatos.calculaIvaAsync()