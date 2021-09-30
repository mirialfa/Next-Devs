import React from 'react'
import {createStore} from 'redux'

import produce from 'immer'

const initialState={
    currentUser:{
        name:null,
        pass:null
    }
    
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

    default:
        break;
}

},initialState)

const store=createStore(reducer)
window.store=store
export default store