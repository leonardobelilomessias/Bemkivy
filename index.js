const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const conection = require("./database/database")
const User = require("./user/User")
const Usercontroler = require("./user/User.controller")
const session = require("express-session")
const Getimg = require("./Getimg")


app.use(session({
    secret:"kakscbeq4141qw2c",cookie:{maxAge:3000000}
}))

//const bodyParser = require("body-parser")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine','ejs')
app.use(express.static('public'))


conection.authenticate().then(()=>{
    console.log('Conexão com banco de dados realizada')
})

//let imagens = Getimg()

app.get("/",(req,res)=>{
    
    User.findAll().then(lista=>{
    res.render("index",{lista:lista})

    })
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/cadastro",(req,res)=>{
    res.render("cadastro",{user:true})
})

app.use("/",Usercontroler)



app.listen(8080,()=>{
    console.log('servidor funcionando')
});