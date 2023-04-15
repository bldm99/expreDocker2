require("dotenv").config()
const express = require("express")
const app = express()

app.set('view engine' , 'ejs')

//Codigo para capturar los datos
app.use(express.urlencoded({extended:false}))
app.use(express(JSON))

app.use("/", require("./router"))

const port = process.env.PORT || 5000

app.listen(port , () =>{
    console.log("corriendpo en el puerto http://localhost:" + port)
})