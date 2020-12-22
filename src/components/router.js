import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Character from './characterCard';
import Search from './searchChars';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Search} />
                    <Route path="/:character" exact component={Character} />
                </Switch>
            </Router>
        )
    }
}