import React, {Component} from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import NavMenu from './Nav-menu'


export default class Header extends Component {
    render () {
        return (
                <header className='header'>
                    <h1 className="title-name logo"><NavLink activeClassName="active-title" exact to="/">Facu</NavLink></h1>
                    <NavMenu />
                </header>
        )
    }
    
}


