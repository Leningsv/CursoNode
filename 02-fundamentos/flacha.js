function sumar(a, b) {
    return a + b;
}
console.log(`sumar funcion normal = ${sumar(10, 20)}`);
let sumarFlecha = (a, b) => {
    return a + b;
}
console.log(`sumar flacha = ${sumarFlecha(10,20)}`);
let sumarFlechaUnaLinea = (a, b) => a + b;
console.log(`sumar flacha 1 linea = ${sumarFlechaUnaLinea(29, 32)}`);

function saludar() {
    return 'hola mundo';
}
console.log(`Saludar ${saludar()}`);
let saludarFecha = () => 'hola mundo';
console.log(`Saludar flecha ${saludarFecha()}`);

function saludarParametro(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludarParametro('Lenin'));

let saludarParametroFlecha = (nombre) => `hola flecha ${nombre}`;
console.log(saludarParametroFlecha('Lenin'));

let deatpool = {
    nombre: 'Wade',
    apellido: 'Windston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deatpool.getNombre());