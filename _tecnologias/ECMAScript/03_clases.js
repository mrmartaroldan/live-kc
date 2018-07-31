class Libro {
    constructor(autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }

    mostrar () {
        console.log(this)
    }
}

class LibroTec extends Libro {
    constructor(autor, titulo, categoria="Informática"){
        super(autor,titulo)
        this.categoria = categoria
    }
}

let libro1 = new Libro("J.Perez", "Aprende Angular")
libro1.mostrar()

let libro2 = new LibroTec("M.Roldán", "Prueba")
libro2.mostrar()