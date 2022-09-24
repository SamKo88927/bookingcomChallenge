import { createContext, useEffect, useReducer } from "react"
import { new_Options, reset_Options } from "../constants/actionTypes";


const INITIAL_STATE ={
    city:"",
    options:  {
        adult:1,
        children:0,
        room:1,
    },
    date: []
} 

export const OptionsContext = createContext(INITIAL_STATE);
const OptionsReducer =(state,action)=>{
    switch (action.type){
        case new_Options:
            return action.payload ;
        case reset_Options:
            return INITIAL_STATE ;
        default:
            return state
    }
}

export const OptionsContextProvider =({children})=>{
    const [state,dispatch]=useReducer(OptionsReducer,INITIAL_STATE)

    return(
            <OptionsContext.Provider
            value={{
             city:state.city,
            date:state.date,
            options:state.options,
                   dispatch,
                }}>
                {children}
            </OptionsContext.Provider>

    )

}

