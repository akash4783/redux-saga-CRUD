import * as types from '../reducer/action/actionTypes'

const initialState = {
    car:[],
    loading:false,
    error:null

}

const carReducer =(state =initialState,action)=>{
    switch (action.type) {
        case types.LOAD_CAR_START:
            return {
                ...state,
            loading:true
            }
        case types.LOAD_CAR_SUCCESS:
            return{
                 ...state,
             loading:false,
             car:action.payload
                };

        case types.LOAD_CAR_ERROR:
            return{
                ...state,
                loading:false,
                 error:action.payload
                };
        default:
            return state
    }

}

export default carReducer