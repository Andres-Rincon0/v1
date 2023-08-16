class Astronauta{
    /* public id: number;
    public nombre: string;
    public record: string; */


    constructor(
       public readonly id:number,
       public nombre:string,
       private _record:string,
       private _recompensa:number
        ){ }

        set record(record:string){
            this._record = record
        }

        get record():string{
           return this._record;
        }

        set recompensa(recompensa:number){
            this._recompensa = recompensa
        }

        get recompensa():number{
           return this._recompensa;
        }
        
    }

    //via constructor

const astro1 = new Astronauta(1, "sofia", "andromeda", 50000);


console.log(astro1.nombre);
console.log(`record: ${astro1.record}`);

//via setter

astro1.record = "kepler"
console.log(`record via setter de Sofia: ${astro1.record}`);



