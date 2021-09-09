const express = require("express");
const app = express();
const conection = require("./database/database")
const user = require("./user/User")
const Usercontroler = require("./user/User.controller")

app.set('view engine','ejs')
app.use(express.static('public'))


conection.authenticate().then(()=>{
    console.log('Conexão com banco de dados realizada')
})


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/cadastro",(req,res)=>{
    res.render("cadastro")
})

app.use("/",Usercontroler)



app.listen(8080,()=>{
    console.log('servidor funcionando')
});