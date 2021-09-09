const express = require("express");
const router = express.Router();

router.get("/user",(req,res)=>{
    res.render("users/index")
});

module.exports = router;