import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"
const INITTIAL_STATE = {
    darkMode: false
}

export const DarkModeContext = createContext(INITTIAL_STATE)

export const DarkModeContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(DarkModeReducer, INITTIAL_STATE);

    return(
        <DarkModeContext.Provider value={{darkMode:state.darkMode, dispatch}}>{children}</DarkModeContext.Provider>
    )
}