import React, {Component} from 'react';
//import './Header.css'
import '../../style/app.css'
import  {Spring} from 'react-spring/renderprops'
import { NavLink } from 'react-router-dom'
import NavMenu from './Nav-menu'


export default class Header extends Component {
    render () {
        return (
                <header  className="z-10 w-full h-20 
                                    fixed top-0
                                    flex flex-row justify-between items-center 
                                    no-underline">
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 600}}>
                        {props => (
                            <div style={props}>
                                <h1  className="logo ml-6 flex flex-row justify-center text-3xl font-black tracking-tighter no-underline">
                                    <NavLink activeClassName="active-title underline" exact to="/">Facu</NavLink>
                                </h1>
                            </div>
                        )}
                    </Spring>

                    
                    <NavMenu />
                </header>
        )
    }
    
}


