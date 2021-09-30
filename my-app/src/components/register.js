
import React,{useRef, useState} from 'react' 
import Details from './details'
import {sendUserDetails} from './service'

export default function Register(){

    const companyRef=useRef(null)
    const userNameRef=useRef(null)
    const emailAddressRef=useRef(null)
    const firstNameRef=useRef(null)
    const lastNameRef=useRef(null)
    const cityRef=useRef(null)
    const countryRef=useRef(null)
    const postalCodeRef=useRef(null)
    const aboutMeRef=useRef(null)

// אני יוצרת אוביקט מהנתונים שהוזנו ואת האוביקט הזה אני שולחת לפונקציה שיושבת בסרוויס
  function save(){
      const user={
          Username:userNameRef.current.value,
          firstName:firstNameRef.current.value,
          lastName:lastNameRef.current.value,
          company:companyRef.current.value,
          aboutMe:aboutMeRef.current.value,
          Emailaddress:emailAddressRef.current.value,
          PostalCode:postalCodeRef.current.value,
          city:cityRef.current.value,
          company:companyRef.current.value

      }
     const response= sendUserDetails(user)
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

<button onClick={()=>{
    save()
    setFlag(1)}}>ok</button><br></br>
</div>
}
{flag &&
<Details></Details>
}
        </>
    )
}