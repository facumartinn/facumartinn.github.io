import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import Button from '../Button'



export default class NavMenu extends Component {
    render () {
        return (
            <div>
                <ul className='list-options menu' id="menu">
                    <li><h4 className="header-elem hvr-grow"><NavLink to="/about">ABOUT</NavLink></h4></li>
                    <li><h4 className="header-elem hvr-grow"><NavLink to="/work">WORK</NavLink></h4></li>
                    <li><h4 className="header-elem hvr-grow"><NavLink to="/contact">CONTACT</NavLink></h4></li>
                    <li><a href="https://drive.google.com/file/d/1iRlGlJTkCGwf8ZDs32ixYUSTjYxTRJqq/view?usp=sharing" target="_blank" rel="noreferrer"><Button type="button">Resume</Button></a></li>
                </ul>  
            </div>
        )
    }
}