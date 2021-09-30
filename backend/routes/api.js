

const express=require('express')
const router=express.Router()

const userController=require('../controller/userController')
const { userlogout } = require('../controller/userController')
router.patch('/updateUser',userController.updateUser)
router.get('/home',(req,res)=>{
    res.send('wellcome to home!!')
})
router.post('/signin',userController.userRegister)
router.post('/login',userController.userlogin)
router.delete('/logout',userController.userlogout)

module.exports=router