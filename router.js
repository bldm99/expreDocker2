
const express = require("express")
const router = express.Router()


router.get("/" , (req , res) =>{
    res.render("index")
})

router.get("/clientes" , (req , res) =>{
    res.render("clientes")
})

router.get("/productos" , (req , res) =>{
    res.render("productos")
})


module.exports = router