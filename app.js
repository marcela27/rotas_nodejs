const express = require("express")
//importanto express
const app = express()
//criação da variavel

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})
//criando servidor web com a porta 8081

app.get("/", function(req, res){
    res.end("Node JS")
})

app.get("/cadastrar/:produto", function(req, res){
    res.end(req.params.item)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end("Produto:  " + req.params.produto  + "<br>Modelo: " + req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
   res.end("SAC:  " + req.params.sac  + "<br>Modelo: " + req.params.modelo)
})
