import axios from 'axios'

export async function sendUserDetails(user){
    console.log('huuo');
    let newUser,newUser2
    newUser= await axios.post('http://localhost:4000/signin',user)
    .then((res)=>{
        
        newUser2=res.data.user
        console.log(newUser2.PostalCode);
        console.log(res.data.token);
        localStorage.setItem(newUser2.PostalCode,res.data.token)
     
        console.log(newUser2);
        return newUser2
    })
    .catch((err)=>{console.log(err);
    })
return newUser
}
export async function login(password){
    console.log('huuo');
    let newUser,newUser2
    newUser= await axios.post('http://localhost:4000/login',{},{
        headers: { Authorization: localStorage.getItem(password) } ,
    })
    .then((res)=>{
        
        newUser2=res.data.user
      if(newUser2)
      {
        console.log(newUser2);
        return newUser2
      }   
      else console.log(res.data);
    })
    .catch((err)=>{console.log(err);
    })
return newUser
}

export async function updateUserDetails(user){
    let newUser,newUser2
    console.log(user);
   let token=localStorage.getItem(user.PostalCode)
    
    newUser= await axios.post('http://localhost:4000/updateUser',user,{
        headers: { Authorization: token} ,
    })
    .then((res)=>{
        newUser2=res.data.user
        console.log(newUser2.PostalCode);
        console.log(res.data.token);
        console.log(newUser2);
        return newUser2 
    })
    .catch((err)=>{console.log(err);
    })
return newUser
}
export async function logOut(password){
    let newUser,newUser2
   let token=localStorage.getItem(password)
    
    newUser= await axios.post('http://localhost:4000/logout',{},{
        headers: { Authorization: token} ,
    })
    .then((res)=>{
        
        newUser2=res.data.user
        console.log(newUser2.PostalCode);
        console.log(res.data.token);
         localStorage.clear(password)
        
        console.log(newUser2);
        return newUser2
    })
    .catch((err)=>{console.log(err);
    })
return newUser
}

