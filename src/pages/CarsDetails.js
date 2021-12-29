import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { onloadcar } from '../redux/reducer/action/action';

const CarsDetails = ()=>{
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(onloadcar())

},[])
const {car} = useSelector((state)=>state.cardata)

    return(

        <div>
{console.log(car)}
dsfggd

        </div>

    )

}


export default CarsDetails