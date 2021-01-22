import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
//import './Header.css'
import '../../style/app.css'
import  {Spring} from 'react-spring/renderprops'
import Button from '../Button'



export default class NavMenu extends Component {
    render () {
        return (
            <div>
                <ul  className='mr-10 
                                md:flex hidden items-center
                                no-underline list-none'>
                    
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 800}}>
                        {props => (
                            <div style={props}>
                                <li className="flex items-center no-underline ml-10"><h4 className="hvr-grow "><NavLink to="/about">ABOUT</NavLink></h4></li>
                            </div>
                        )}
                    </Spring>
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 1000}}>
                        {props => (
                            <div style={props}>
                                <li className="flex items-center no-underline ml-10"><h4 className="hvr-grow"><NavLink to="/work">WORK</NavLink></h4></li>
                            </div>
                        )}
                    </Spring>
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 1200}}>
                        {props => (
                            <div style={props}>
                                <li className="flex items-center no-underline ml-10"><h4 className="hvr-grow"><NavLink to="/contact">CONTACT</NavLink></h4></li>
                            </div>
                        )}
                    </Spring>
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 1400}}>
                        {props => (
                            <div style={props}>
                                <li className="flex items-center no-underline ml-10"><a href="https://drive.google.com/file/d/1iRlGlJTkCGwf8ZDs32ixYUSTjYxTRJqq/view?usp=sharing" target="_blank" rel="noreferrer"><Button type="button">Resume</Button></a></li>
                            </div>
                        )}
                    </Spring>
                </ul>  
            </div>
        )
    }
}