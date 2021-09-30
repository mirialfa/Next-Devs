
import axios from 'axios'

export function sendUserDetails(user){
    console.log('huuo');
    
    axios.post('http://localhost:4000/signin',user)
    .then((res)=>{console.log(res.data);
        console.log('aaa');
        
    })
    .catch((err)=>{console.log(err);
    })
}
