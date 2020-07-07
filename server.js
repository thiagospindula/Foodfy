const express = require('express')
//nunjucks possibilita re-uso de código
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")


//configurando pagina de estilos(styles) (express.static = para usar arquivos estaticos)
server.use(express.static('public'))

//setando motor de view que irá usar nesta caso html ou njk
server.set("view engine", "njk")

//configurando caminho para nunjucks
nunjucks.configure("views",{
  express: server,
  autoescape: false,
  noCache: true

})

// ===*Rotas*=== request, response
server.get("/", function(req, res) {
  return res.render("index", { items: receitas })
})

server.get("/sobre", function(req, res) {
  return res.render("sobre")
})

server.get("/receitas", function(req, res) {
//{ items: recipes} = criando atributo items e passando recipes
  return res.render("receitas", { items: receitas })
})

server.get('/details_recipes/:index', function (req, res) {
  const index = req.params.index
  const item = receitas[index]
  if (!item) {
      return res.render('not-found')
  }
  return res.render('details_recipes', { item })
})

server.listen(5000, function() {
  console.log("server is running")
})