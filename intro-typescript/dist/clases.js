"use strict";
class Astronauta {
    /* public id: number;
    public nombre: string;
    public record: string; */
    constructor(id, nombre, _record) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
//via constructor
const astro1 = new Astronauta(1, "sofia", "andromeda");
console.log(astro1.nombre);
console.log(`record: ${astro1.record}`);
//via setter
astro1.record = "kepler";
console.log(`record via setter de Sofia: ${astro1.record}`);
