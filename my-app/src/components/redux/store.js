import React from 'react'
import {createStore} from 'redux'

import produce from 'immer'

const initialState={
    currentUser:null
    
}

// action:{type:"UPDATE_NAME", payload:"Rivka"}
const reducer=produce((state,action)=>{
switch (action.type) {
    case 'UPDATE_NAME':
        state.currentUser.name=action.payload
        break;
        case 'UPDATE_PASSWORD':
        state.currentUser.password=action.payload
        break;
        case 'UPDATE_USER':{
            console.log(action.payload);
            
            state.currentUser=action.payload
            console.log(state.currentUser);
            
            break;
        }
            
    default:
        break;
}

},initialState)

const store=createStore(reducer)
window.store=store
export default store