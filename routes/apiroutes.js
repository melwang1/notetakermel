const app = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json")


app.get("/notes", function(req,res){
   db = JSON.parse(fs.readFileSync("./db/db.json")) || []
   res.json(db)
})

app.post("/notes", function(req,res){
    const data = {
        title: req.body.title,
        text: req.body.text,
        id:Math.floor(Math.random()*10099)
    }
    db.push(data)
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
        if(err) throw err
    })
    res.json(db)
})


module.exports = app;