const User=require('../model/user')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const updateUser=(req,res)=>{
  const token=req.headers["authorization"]
  let user=jwt.verify(token,process.env.MY_SECRET)
  console.log('hi');
  
  User.findByIdAndUpdate({_id:user.pass},req.body,{new:true})
  .then((user)=>{
    // user.set({Username:req.body.UserName})
    // user.save()
    // .then((user)=>{ res.send(user)})
console.log(user);

    res.send({user:user})
  })
  .catch((err)=>{res.send(err)})
  
}

const userRegister=(req,res)=>{
  let user=req.body


let userDB=new User(user)
userDB.save()
.then((user)=>{
  const token=jwt.sign({pass:user._id},process.env.MY_SECRET)
res.send({user:user, token:token})
})
.catch((err)=>{
res.send(err)
})
}

const userlogin=(req,res)=>{
const token=req.headers["authorization"]
let user=jwt.verify(token,process.env.MY_SECRET)
User.findById(user.pass)
.then((user)=>{
  res.send({user:user})
})
.catch((err)=>{res.send(err)})

}
const userlogout=(req,res)=>{
const user=jwt.verify(req.headers["authorization"],process.env.MY_SECRET)
User.deleteOne({_id:user.pass})
.then((user)=>{res.send ({user:user})})
.catch((err)=>{res.send(err)})
}

module.exports={updateUser,userRegister,userlogin,userlogout}
