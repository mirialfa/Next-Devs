import React,{useRef, useState} from 'react' 
import Details from './details'
import {updateUserDetails} from './service'
import {connect} from 'react-redux'
import {updateUser} from './redux/action'

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    } }
   
    const mapDisdpatchToProps= (dispatch)=>({
       updateUseInRedux:(name)=>{dispatch(updateUser(name))}})
      
export default connect(mapStateToProps,mapDisdpatchToProps)( function UpdateDetails(props){

const {updateUseInRedux,currentUser}=props

    const companyRef=useRef(null)
    const userNameRef=useRef(null)
    const emailAddressRef=useRef(null)
    const firstNameRef=useRef(null)
    const lastNameRef=useRef(null)
    const cityRef=useRef(null)
    const countryRef=useRef(null)
    const postalCodeRef=useRef(currentUser.PostalCode)
    const aboutMeRef=useRef(null)

  function update(){
      const user={
          Username:userNameRef.current.value,
          firstName:firstNameRef.current.value,
          lastName:lastNameRef.current.value,
          company:companyRef.current.value,
          aboutMe:aboutMeRef.current.value,
          Emailaddress:emailAddressRef.current.value,
          PostalCode:currentUser.PostalCode,
          city:cityRef.current.value,
          company:companyRef.current.value

      }
      console.log(user);
      
      updateUserDetails(user)
     .then((newUser)=>{
    console.log(newUser);
    updateUseInRedux(newUser)
    
     })
  }
    const [flag,setFlag]=useState(0)

    return(
        <>{
            !flag &&
        <div>
<h3>update....   </h3>

        <input placeholder={currentUser.company} ref={companyRef}></input>
        <br></br>
        <input placeholder={currentUser.Username} ref={userNameRef}></input>
        <br></br>
        <input placeholder={currentUser.EmailAddress} ref={emailAddressRef}></input>
        <br></br>
        <input placeholder={currentUser.firstName}ref={firstNameRef}></input>
        <br></br>
        <input placeholder={currentUser.lastName} ref={lastNameRef}></input>
        <br></br>
        <input placeholder={currentUser.city} ref={cityRef}></input>
        <br></br>
        <input placeholder={currentUser.country} ref={countryRef}></input>
        <br></br>
        <input placeholder={currentUser.PostalCode} ref={postalCodeRef}></input>
        <br></br>
        <input placeholder={currentUser.aboutMe} ref={aboutMeRef}></input>
        
        <br></br>

<button onClick={()=>{
   update()
    setFlag(1)}}>ok</button><br></br>
</div>
}
{flag &&
<Details></Details>
}
        </>
    )
})