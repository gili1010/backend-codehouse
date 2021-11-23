const fs = require('fs')

class Contenedor {
    constructor(){
        console.log("iniciando contenedor");

    }

    static countId = 0
    static file = "produto.json"
    static lista = []

    //metodo save: recibe un objeto, lo guarda y devuelve el id asignado
    async save (objeto) {
        Contenedor.countId++;
        objeto["id"] = Contenedor.countId

        Contenedor.lista.push(objeto)

        await this.write()

        return Contenedor.countId;
    } 


     //metodo deleteById : elimina del archivo el objeto con el id buscado.
    async deleteById(id){

        Contenedor.lista = Contenedor.lista.filter(element => element.id != id)

        await this.write()
    } 

    //metodo deleteAll : elimina todos los objetos presentes.
    async deleteAll(){

        fs.unlink("./contenedor.json", error =>{
            if(error) {
                console.log("hubo un error");
            }else {
                console.log("borrado");
            }
        })

            } 

    async write(){

        let string = JSON.stringify(Contenedor.lista)
        await fs.promises.writeFile(Contenedor.file, string)
    }

    
    //metodo getAll devuelve un array conlos objetos presentes en el archivo
    getAll(){
        return Contenedor.lista;
        }


        //metodo getById : recibe un id y devuelve el objeto con ese id
        async getById(id){

            Contenedor.lista = Contenedor.lista.filter(element => element.id == id)
    
            console.log(Contenedor.lista);
        } 

    async init(){
        try {
            let data = await fs.promises.readFile(Contenedor.file)
            Contenedor.lista = JSON.parse(data)
    
            for (const element of Contenedor.lista){
                if(element.id > Contenedor.countId) 
                Contenedor.countId = element.id
            }
            console.log("Last ID: ", Contenedor.countId) 
        } catch (error){
            console.log("Aun no hay archivo");
        }

    }
}

module.exports = Contenedor