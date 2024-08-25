import React from 'react'
import ReactDOM from 'react-dom/client'
// import Routers from './components/Routers.jsx'
import { BrowserRouter, Route } from "react-router-dom";

import ListItems from "./components/LoginComponent/LoginContainer.jsx"
import Login from "./components/LoginComponent/LoginContainer.jsx";
import Home from  "./components/HomeComponent/Home.jsx";

// import { Security, LoginCallback } from "@okta/okta-react";
// import { config } from "./utils/oktaConfig";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            {/*<Security {...config}>*/}
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            {/*<Route path="/implicit/callback" component={LoginCallback} />*/}
            {/*</Security>*/}
            <Route path="/items">
                <ListItems />
            </Route>
        </React.StrictMode>
    </BrowserRouter>,
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Routers from './components/Routers.jsx'
// import { BrowserRouter } from "react-router-dom";
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//         <React.StrictMode>
//             <Routers />
//         </React.StrictMode>
//     </BrowserRouter>,
// )