import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Home, SearchResults} from "./pages"
import "./App.css"
import {GlobalProvider} from "./context/GlobalState"

const App = () => {
    return (
        <GlobalProvider>
        <div>
           <Router>
               <Route exact path="/" render={(props)=><Home {...props}/>}/>
               <Route exact path="/results" component={SearchResults}/>
           </Router>
        </div>
        </GlobalProvider>
    )
}

export default App
