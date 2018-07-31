interface Autor {
    autor_nombre: string;
    autor_apellido: string;
}

class Libro implements Autor {

    autor_nombre;
    autor_apellido;
    titulo: string;

    constructor(autor, titulo) {
        this.autor_nombre = autor;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
    }
}

class LibroTec extends Libro {

    categoria: string;

    constructor(autor, titulo, categoria= 'Informática') {
        super(autor, titulo);
        this.categoria = categoria;
    }

    mostrar() {
        super.mostrar();

        console.log('Libro técnico');
    }
}

let libro = new LibroTec('M.Roldán', 'Prueba');
libro.mostrar();

