const express=require('express')
const router=require('./routes/api')
const mongoose=require('mongoose')
const app=express()
const jwt=require('jsonwebtoken')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const User=require('./model/user')

dotenv.config()
app.use((req, res, next) => {
    console.log('midd');
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET, OPTIONS");
        return res.status(200).json({});
    }
    next();

});
app.use('/',(req,res,next)=>{
    if(!req.originalUrl.includes('signin')){
        console.log('good func');
      const token=req.headers["authorization"]
      if(token){
          console.log(token);
          
        const user=jwt.verify(req.headers["authorization"],process.env.MY_SECRET)
        console.log(user);
        
        if(!user)
        res.send('not allow access to Application')

        else {
            User.findById(user.pass)
            .then((user)=>{
                if(!user)
                res.send('not allow access to Application')

            })
            .catch((err)=>{
                console.log(err);
                
            })
        }

      }
        else res.send('not allow access to Application')
     
    }
   return next()
})
app.use(bodyParser.json())
app.use('/',router)
app.get('/',(req,res)=>{
    res.send('wellcome to server!!')
})

const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    }

mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
   console.log('connect...');
   
})
.catch((err)=>{
console.log(err);

})


app.listen(4000,()=>{
    console.log('listen...');
    
})