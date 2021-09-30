
import React,{useRef,useState} from 'react' 
import {connect} from 'react-redux'

function mapStateToProps(state){
return{
    currentUser: state.currentUser
}
}

export default connect(mapStateToProps)( function Details(props){

 const currentUser=props.currentUser
    return(
        <>
<h3>your details:   </h3>

    <h3>name: {currentUser.name}</h3>
    <h3>password: {currentUser.pass}</h3>
    


        </>
    )
})