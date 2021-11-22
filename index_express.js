const Contenedor = require ('./contenedor.js')

const { response } = require("express");
const express = require("express")

const app = express()
const PORT = 8080

let file = "produto.json"
let lista = []

/* .listen(process.env.PORT || 8080) */
app.listen(process.env.PORT || PORT , () => {
    console.log(`servidor corriendo en ${PORT}`);
})

 app.get ('/', (request, response) =>{
    response.send("Hola a todos")

})

app.get ('/productoramdon', (request, response) =>{
    response.send("Hola a todos soy ramdon")
})