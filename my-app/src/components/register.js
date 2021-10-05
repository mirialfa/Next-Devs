import React,{useRef, useState} from 'react' 
import Details from './details'
import {sendUserDetails} from './service'
import {connect} from 'react-redux'
import {updateUser} from './redux/action'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';


function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    }}
    const mapDisdpatchToProps= (dispatch)=>({
        
       updateUseInRedux:(name)=>{dispatch(updateUser(name))}})
export default connect(mapStateToProps,mapDisdpatchToProps)( function Register(props){

const {updateUseInRedux}=props

    const companyRef=useRef(null)
    const userNameRef=useRef(null)
    const emailAddressRef=useRef(null)
    const firstNameRef=useRef(null)
    const lastNameRef=useRef(null)
    const cityRef=useRef(null)
    const countryRef=useRef(null)
    const postalCodeRef=useRef(null)
    const aboutMeRef=useRef(null)

  async function save(){
      const user={
        company:companyRef.current.value,
        Username:userNameRef.current.value,
        Emailaddress:emailAddressRef.current.value,
        firstName:firstNameRef.current.value,
        lastName:lastNameRef.current.value,
        city:cityRef.current.value,
        country:countryRef.current.value,
        PostalCode:postalCodeRef.current.value,
        aboutMe:aboutMeRef.current.value,

      }
     sendUserDetails(user)
     .then((newUser)=>{
    console.log(newUser);
     updateUseInRedux(newUser)
    setFlag(1)
     })
  }

    const [flag,setFlag]=useState(0)
    return(
        <>{
            !flag &&
        <div>
<h3>please enter details:   </h3>

        <input placeholder='enter company' ref={companyRef}></input>
        <br></br>
        <input placeholder='enter userName' ref={userNameRef}></input>
        <br></br>
        <input placeholder='enter emailAddress' ref={emailAddressRef}></input>
        <br></br>
        <input placeholder='enter firstName' ref={firstNameRef}></input>
        <br></br>
        <input placeholder='enter lastName' ref={lastNameRef}></input>
        <br></br>
        <input placeholder='enter city' ref={cityRef}></input>
        <br></br>
        <input placeholder='enter country' ref={countryRef}></input>
        <br></br>
        <input placeholder='enter potalCode' ref={postalCodeRef}></input>
        <br></br>
        <input placeholder='enter aboutMe' ref={aboutMeRef}></input>
        
        <br></br>

<button onClick={async()=>{
  await  save()}}>ok</button><br></br>
</div>
}

{flag &&
<Details></Details>
}
        </>
    )
})