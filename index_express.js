const Contenedor = require ('./contenedor.js')

/* const { response } = require("express"); */
const express = require("express")
/* const { json } = require('express') */

const app = express()
 const PORT = process.env.PORT || 8080 


app.listen(PORT, () => {
    console.log(`servidor corriendo en ${PORT}`);
})

 app.get ('/', (request, response) =>{
    
        const cc =new Contenedor()
        cc.init() 
    
        let lista = cc.getAll()

    response.json(lista)
})

app.get ('/productoramdon', (request, response) =>{
    const cc =new Contenedor()
    cc.init() 

    let lista = cc.getAll()

    let min = 1;
    let max = 3;

    let x = Math.floor(Math.random()*(max-min+1)+min);

    response.json(lista.find(element => element.id === x))
})

