import * as types from '../redux/acionTypes'
import {take,
    takeEvery,
    all,put,
    delay,
    fork,
    takeLatest,
    call} from "redux-saga/effects"
import { loadUserSuccess,loadUserError, createUserSuccess,createUserError,deleteUserSuccess,deleteeUserError,updateUserSuccess,updateUserError } from '../redux/action'
import { createuserApi, loaduserApi,deleteuserApi, updateuserApi } from '../redux/api'

 export function* onloadUserStartAsync(){
    try{
        const response = yield call(loaduserApi);
         
        console.log('>>>>>>>>data',response.data)
        if(response.status === 200){
            yield delay(500)
           
            yield put(loadUserSuccess(response.data))
           
        }

    } catch(error){
        console.log("error",error);
        yield put(loadUserError(error.response.data))

    }
}
export function* oncreateUserAsync({payload}){

    try{
        const response = yield call(createuserApi,payload);
        if(response.status === 200){
         
           
            yield put(createUserSuccess(response.data))
           
        }
    }catch(error){
        yield put(createUserError(error.response.data))

    }
}

export function* onDeleteUserAsync(userId){

    try{
        const response = yield call(deleteuserApi,userId);
        if(response.status === 200){
            yield delay(500)
         
           
            yield put(deleteUserSuccess(userId))
           
        }
    }catch(error){
        yield put(deleteeUserError(error.response.data))

    }
  
}
export function* onupdateUserAsync({payload:{id,data}}){
    try{
       const response = yield call(updateuserApi,id,data)

       if(response.status === 200){
        yield delay(500)
     
       
        yield put(updateUserSuccess())
       
    }

    }
    catch(error){
        yield put(updateUserError(error.response.data))

    }

}

function* onLoadUser(){

    yield takeEvery(types.LOAD_USERS_START,onloadUserStartAsync)
}

 function* onCreateUser(){
    yield takeLatest(types.CREATE_USER_START,oncreateUserAsync)
}

function* onUpdateUser(){
    yield takeLatest(types.UPDATE_USER_START,onupdateUserAsync)
}

function* onDeleteUser(){
  while(true){
      const {payload:userId}=yield take(types.DELETE_USER_START)
      yield call(onDeleteUserAsync,userId)
  }
}

const usersaga=[fork(onLoadUser),fork(onCreateUser),fork(onDeleteUser),fork(onUpdateUser)]

export default function* rootSaga(){
    yield all([...usersaga])
}

