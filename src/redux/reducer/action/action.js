import * as type from './actionTypes'

export const onloadcar = ()=>(
    {
        type:type.LOAD_CAR_START
    }
)

export const loadcarSuccess=(car)=>({
    type:type.LOAD_CAR_SUCCESS,
    payload:car,


})

export const loadCarError =(error)=>({
    type:type.LOAD_CAR_ERROR,
    payload:error,
})
