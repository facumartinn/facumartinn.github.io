import React, { Component } from 'react'
import '../components/app/App.css'
import { Route, Switch } from 'react-router-dom'
import About from './about/About'
import Work from './work/Work'
import Contact from './contact/Contact'
import Welcome from './welcome/Welcome'


export default class Routes extends Component {
    render () {
        return (
                <Switch className="content welcome">
                    <Route exact path="/" component={Welcome}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/work" component={Work}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
        )
    }
    
}
