
import React,{useRef,useState} from 'react' 
import {connect} from 'react-redux'
import UpdateDetails from './update'
import {logOut} from './service'
import {updateUser} from './redux/action'
import RegularButton from '../components/CustomButtons/Button'

function mapStateToProps(state){
return{
    currentUser: state.currentUser
}
}

const mapDisdpatchToProps= (dispatch)=>({
    
    updateUserInRedux:(name)=>{dispatch(updateUser(name))}
     
     })

export default connect(mapStateToProps)( function Details(props){
    const [flag2,setFlag2]=useState(0)
    const [logOutF,setLogOutf]=useState(0)

 const {currentUser,updateUserInRedux}=props

function logOutUser(){
logOut(currentUser.PostalCode)
.then((user)=>{
    console.log(user);
    updateUser(null)
    setFlag2(0)
    setLogOutf(1)
    
})
.catch(()=>{})
}

    return(
        <>
        {!logOutF &&
        <div>            
        <button onClick={()=>{logOutUser()}} >logOut</button>
<h3>your details:   </h3>
      

    <h3>company: {currentUser.company}</h3>
    <h3>Username: {currentUser.Username}</h3>
    <h3>Emailaddress: {currentUser.Emailaddress}</h3>
    <h3>firstName: {currentUser.firstName}</h3>
    <h3>lastName: {currentUser.lastName}</h3>
    <h3>city: {currentUser.city}</h3>
    <h3>country: {currentUser.country}</h3>
    <h3>PostalCode: {currentUser.PostalCode}</h3>  
    <h3>about me: {currentUser.aboutMe}</h3>

    <button onClick={()=>{setFlag2(1)}} >update Your details...</button> 
    </div>}
        
   { flag2 &&
    <UpdateDetails></UpdateDetails>}
    
   
    {logOutF &&  <h1>logOut success!</h1>}
        </>
    )
})