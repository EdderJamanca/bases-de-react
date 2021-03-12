import { useState } from "react"


export const useCounter = (initialState=10) => {

    const {state, setState}=useState(initialState); // por defecto recibe 10

    const incremento=(factor=1)=>{
        setState( state + factor )
    };

    const reset=()=>{
        setState(initialState)
    }

    const decremento =(factor=1)=>{
        setState( state - factor);
    };

    return {state, incremento,reset, decremento};
}
