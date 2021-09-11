const express = require("express");
const router = express.Router();
const User = require("./User")

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.get("/user",(req,res)=>{
    res.render("users")
});

router.post("/user/create",(req,res)=>{
    let dado = req.body
    if(dado.femail == undefined  || dado.fsenha == undefined ){
        res.send('undefind')
        
    }else if(dado.femail == ""  || dado.fsenha == "" ){
        res.send("vazio")
    }else{
        User.findOne({
            where:{
                email:dado.femail
            }
        }).then(busca=>{
            if(busca == undefined){
                User.create({
                    email:dado.femail,
                    senha:dado.fsenha
                }).then( res.redirect("/user")).catch(e=>{res.send(e)})
            }
            else{
                res.send('usuario já existe')
            }
        })
    }
})

router.post("/user",(req,res)=>{
    let dado = req.body
    User.findOne({
        where:{
            email:dado.femail,
            senha:dado.fsenha
        }
    }).then(dado=>{
        if(dado != undefined){
            res.redirect("/user")
        }else{
            res.send('usuario não existe')
        }
    }).catch(e=>{})
})
module.exports = router;