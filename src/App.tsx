import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import RegisterPage from "./Pages/Register/Register";
import HomePage from "./Pages/Home/Home";


export default class App extends React.Component {


    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <RegisterPage />
                    </Route>>
                    <Route exact={true} path="/home">
                        <HomePage />
                    </Route>>

                </Switch>
            </Router>)
    }
}