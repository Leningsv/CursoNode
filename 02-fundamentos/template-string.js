let nombre = 'Deadpool';
let real = 'Wade Windston';
console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;
console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre de ${getNombre()}`);