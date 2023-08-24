const express =require('express')
const router =express.Router();
const {getLoginUser}=require('../controller/login-controller');

router.post('/get_email',getLoginUser)
module.exports=router;