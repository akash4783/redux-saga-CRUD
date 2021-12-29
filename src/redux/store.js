import { applyMiddleware} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger"
import rootReducer from "./rootReducer";
import { createStore } from "redux";
import generalSaga from '../saga/allRootSaga'
import {createLogger} from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from "../saga/usersaga";
const sagamiddleware = createSagaMiddleware()



// const middleware =sagamiddleware

// if(process.env.NODE_ENV==="development"){
//     middleware.push(logger)
// }

// const store = createStore(rootReducer,applyMiddleware(...middleware))
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagamiddleware, createLogger())));
sagamiddleware.run(rootSaga)

export default store 