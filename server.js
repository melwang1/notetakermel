const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
const api = require("./routes/apiroutes")
const html = require("./routes/htmlroutes")

app.use("/api",api)
app.use("/",html)


app.listen(PORT, () => {
    console.log('hello world - App running on :',PORT)
})