import usersaga from "./usersaga";

import {all} from 'redux-saga/effects'



export default  function* generalSaga(){
    yield all[
    usersaga()
   
]
    
}