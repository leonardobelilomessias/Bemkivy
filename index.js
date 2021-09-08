const express = require("express");
const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/cadastro",(req,res)=>{
    res.render("cadastro")
})

app.get("/user",(req,res)=>{
    res.render("/users/index")
})


app.listen(8080,()=>{
    console.log('servidor funcionando')
});