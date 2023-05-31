const express = require('express');
const jwt = require('jsonwebtoken');
const {register,login,logout,getUser}=require('../services/user')
const router = express.Router();
const joiValidation = require('../middleware/joiValidation');
const {loginValidation,registerValidation} = require('../joiValidation/index');
const {ensureSignedIn,ensureSignedOut} = require('../middleware/authentication')

router.get("/",(req,res)=>{
    res.send("hello world");
})
router.post("/register",ensureSignedOut, joiValidation(registerValidation) ,async (req,res)=>{
    const parameter = req.body
    const result = await register(parameter);
    res.json(result);
})
router.post("/login",ensureSignedOut,joiValidation(loginValidation) , async (req,res)=>{
    const parameter = req.body
    const { email,password } = parameter;
    const result = await login(email,password);
    const token = jwt.sign(parameter,"S@ecret");
    req.session.jwtToken = token;
    res.json(result);

})
router.post('/logout', ensureSignedIn, function(req, res, next){
    const result = logout(req.session);
    console.log("cookie", req.cookies);
    res.clearCookie('token')
    res.json(result);
})
router.get('/user/:id', ensureSignedIn, async function(req, res, next){
    var userId = req.path.split("/user/")[1]
    result = await getUser(userId)
    return res.json(result)
})
module.exports = router;
