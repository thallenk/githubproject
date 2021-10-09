import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import Home from './views/Home/Home';

export default function Routes() {
    return (
        <BrowserRouter>      
            <Switch>
                <Route path ='/' exact component = {Home}/>
                <Route path ='/repositories' exact component = {Dashboard}/>

            </Switch>
        </BrowserRouter>
        


    )

}   