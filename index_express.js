const { response } = require("express");
const express = require("express")

const app = express()
const PORT = 3000

const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en ${PORT}`);
})

server.on('error', error =>{
    console.log("error de servidor");
})

app.get ('/', (request, response) =>{
    response.send("Hola a todos")
})