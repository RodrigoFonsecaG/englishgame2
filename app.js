const express = require("express")
const server = express();

const nunjucks = require("nunjucks");

nunjucks.configure("src", {
    express: server,
    noCache: true
})

server.use(express.static("public"))

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.listen("5000");