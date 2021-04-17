import React, {createContext, useReducer} from "react"



const initialState={
    query:"",
    searchData:[],
    searchHistory:[],
}


export const GlobalContext = createContext(initialState);



function reducer (state,action){

    switch(action.type){


        case "SEARCH_QUERY":
            console.log("queryReducer " + action.payload)
            return {
                ...state,
                searchHistory:[...state.searchHistory, action.payload],
                query:action.payload
            }

        default:
            return state;
    }
}



export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState);


    const search_query=query=>{
        console.log(`Global_Provider:${query}`);

        dispatch({
            type:'SEARCH_QUERY',
            payload:query
        })
    }


    return (<GlobalContext.Provider value ={{search_query,query:state.query}}>
        {children}
    </GlobalContext.Provider>)
}