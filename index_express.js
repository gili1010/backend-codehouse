const Contenedor = require ('./contenedor.js')

const { response } = require("express");
const express = require("express")

const app = express()
const PORT1 = 8080

let file = "produto.json"
let lista = []

/* .listen(process.env.PORT || 8080) */
app.listen(process.env.PORT || PORT1 , () => {
    console.log(`servidor corriendo en ${PORT1}`);
})

 app.get ('/', (request, response) =>{
    response.send("Hola a todos")
    let data = fs.promises.readFile(file)
            lista = JSON.parse(data)
            console.log(lista);
})

app.get ('/productoramdon', (request, response) =>{
    response.send("Hola a todos soy ramdon")
})