
import React,{useRef, useEffect,useState} from 'react' 
import {connect} from 'react-redux'
import {updateUser,updatePassword} from './redux/action'
import {Link,BrowserRouter as Router,useHistory,withRouter} from 'react-router-dom'
import Details from './details'
import Register from './register'
import {login} from './service'
import Navbar from '../components/Navbars/Navbar'
import Footer from '../components/Footer/Footer'
import Input from '@mui/material/Input';
// import Sidebar from '../components/Sidebar'

import {MDCTextField} from '@material/textfield';
// import Grid from '../components/Grid'
import InputMaterialUi from 'input-material-ui';function mapStateToProps(state){
return{
    currentUser: state.currentUser
}
}

const mapDisdpatchToProps= (dispatch)=>({
    
   updateUserInRedux:(name)=>{dispatch(updateUser(name))}
    
    })
export default connect(mapStateToProps,mapDisdpatchToProps)(function Login(props){

    const [flag,setFlag]=useState(0)

const {updateUserInRedux,currentUser}=props

   function loginUser(){
       login(passwordRef.current.value)
       .then((response)=>{
        console.log(response);
        if(!response)
        alert('not allow')
        else
        updateUserInRedux(response)
        console.log(currentUser);
       })
    }
    const nameRef=useRef(null)
    const passwordRef=useRef(null)

    return(
        <>
        <Navbar
         ></Navbar>

         {/* <Footer></Footer> */}
        {!currentUser && !flag &&
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
{currentUser && !flag &&
 <Details ></Details>
}
{flag &&
<Register></Register>}
        </>
 )})
