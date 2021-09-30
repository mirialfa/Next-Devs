
import React,{useRef, useEffect,useState} from 'react' 
import {connect} from 'react-redux'

import {updateName,updatePassword} from './redux/action'
import {Link,BrowserRouter as Router,useHistory,withRouter} from 'react-router-dom'
import Details from './details'
import Register from './register'
function mapStateToProps(state){
return{
    currentUser: state.currentUser
}
}

const mapDisdpatchToProps= (dispatch)=>({
    
   updateUserName:(name)=>{dispatch(updateName(name))}
    
    })
export default connect(mapStateToProps,mapDisdpatchToProps)(function Login(props){

    const [flag,setFlag]=useState(0)

const {updateUserName,currentUser}=props

   function loginUser(){
       console.log(updateUserName);
       
      updateUserName(nameRef.current.value)
    }

    const nameRef=useRef(null)
    const passwordRef=useRef(null)

    return(
        <>
        {!currentUser.name && !flag &&
        <div>
<h3>please enter details:   </h3>

        <input placeholder='enter userName' ref={nameRef}></input>
        <br></br>
        <input placeholder='enter password' ref={passwordRef}></input>

        <br></br>
<button onClick={()=>{loginUser()}}>login</button><br></br>
<h3>or new register:</h3><button onClick={()=>{setFlag(1)}}>new register</button>
</div>
}
{currentUser.name && !flag &&
 <Details></Details>
}
{flag &&
<Register></Register>
}
        </>
    )
})