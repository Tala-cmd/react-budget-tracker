import { createContext } from "react"


const initialState = {
    budget: 2000,
    expenses: [
        {id: 123123, name:'Shopping', cost: 40},
        {id: 123123, name:'Holiday', cost: 400} 

    ]
}

export const AppContext = createContext();

const AppProvider = (props) => {


}