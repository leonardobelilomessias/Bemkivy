const express = require("express");
const router = express.Router();
const User = require("./User")
const UserAuth = require("../midwares/UserAuth")
const session = require("express-session")

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.get("/user",UserAuth,(req,res)=>{
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
                res.redirect("/cadastro")
            }
        })
    }
})

router.post("/authenticate",(req,res)=>{
    let dado = req.body
    User.findOne({
        where:{
            email:dado.femail,
            senha:dado.fsenha
        }
    }).then(user=>{
       if(user != undefined){
           
            req.session.user = {
                email:user.email,
                id: user.id
                
            }
            res.redirect("/user")
        }else{
            res.redirect("/login")
        }
    }).catch(e=>{})

})

router.get("/logoof",(req,res)=>{
    req.session.user = undefined
    res.redirect("/login")
})
module.exports = router;