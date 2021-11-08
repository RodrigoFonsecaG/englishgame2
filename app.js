const express = require("express");
const fs = require("fs");
const data = require("./public/data.json");
const server = express();


const nunjucks = require("nunjucks");

nunjucks.configure("src", {
    express: server,
    noCache: true
})

server.use(express.static("public"))
server.use(express.urlencoded({extended:true}))

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.post("/", (req, res) => {
    const {word,wordpt,phrase,classe} = req.body

    data.push(req.body);

    fs.writeFile("./public/data.json", JSON.stringify(data,null,2), function (err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/")
    })  
})

server.listen(process.env.PORT || 3000);