const http = require ('http')

const server = http.createServer((request, response) =>{
    response.end("esta es la response")
    console.log("jajaj");
});

const connect = server.listen(3000, () =>{
    let port = connect.address().port;
    console.log(`escuchando por puerto ${port}`)
})