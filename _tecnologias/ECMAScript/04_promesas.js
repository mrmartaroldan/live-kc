//Las promesas se usan para gestionar procesos asincrónicos
function hacerAlgoPromesa(){ 
    //Retornamos un objeto de tipo promesa que recibe una funcion, y a que su vez recibe dos funciones, 
    //una la que se ejecuta cuando todo vaya correctamente (resolve -> then) y la otra cuando da error (reject -> catch)

    return new Promise(function (resolve, reject) { 
        setTimeout(() => { 
            console.log('Esperando...'); 
            let number = Math.random()
            if (number < 0.7) {
                resolve(number) // correcto
            }else{
                reject(number) // incorrecto
            }
        },2000);
    })
}

hacerAlgoPromesa()
.then( (data) => {console.log("Resultado: ", data)})
.catch( (error) => {console.log("Error: ", error)})