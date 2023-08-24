const express =require('express')
const router =express.Router();
const {addUsers}=require('../controller/user-controller');
const { getNotes } = require('../controller/notes-controller');


//router.get('/get_userss',getAllUsers)
router.post('/save_users',addUsers)




//router.put('/update_users/:id',updateUser)

module.exports=router;