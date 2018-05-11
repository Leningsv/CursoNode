let deatpool = {
    nombre: 'Wade',
    apellido: 'Windston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}
console.log(deatpool.getNombre());
// let nombre = deatpool.nombre;
// let apellido = deatpool.apellido;
// let poder = deatpool.poder;
// Con la destructuracion se puede extraer las propiedades de un objeto en otros objetos
let {
    nombre: primerNombre,
    apellido,
    poder
} = deatpool;
console.log(primerNombre, apellido, poder);