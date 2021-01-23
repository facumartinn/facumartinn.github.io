import React from 'react';
//import './Header.css'
import '../../style/app.css'
import  {Spring} from 'react-spring/renderprops'
import { NavLink } from 'react-router-dom'
//import NavMenu from './Nav-menu'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope, faBars)


//export default class Header extends Component {
export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
        return (
                <nav className="overflow-hidden flex justify-between items-center px-2 py-3 navbar-expand-lg mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 600}}>
                            {props => (
                                
                                    <div style={props} className="w-full relative flex justify-between items-center md:w-auto md:static md:block md:justify-start">
                                        
                                        <NavLink className="logo flex flex-row justify-center text-3xl font-black tracking-tighter" activeClassName="active-title underline" exact to="/">Facu</NavLink>
                                        
                                        <button className="text-white cursor-pointer text-3xl leading-none px-6 py-1  bg-transparent block md:hidden outline-none focus:outline-none" type="button"
                                                onClick={() => setNavbarOpen(!navbarOpen)}>
                                                    <FontAwesomeIcon icon={["fa", "bars"]}></FontAwesomeIcon>
                                        </button>
                                    
                                </div>
                            )}
                        </Spring>
                    
                    <div className={" flex flex-col md:flex  justify-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">

                        <ul className="h-screen mx-48 md:mx-0 mt-10 md:mt-0 md:mx-auto sm:h-auto flex flex-col md:flex-row  items-center list-none md:ml-auto">
                            <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 800}}>
                                    {props => (
                                        <div style={props}>
                                            <li className="py-4 md:py-0" ><h4 className="flex items-center no-underline px-3 py-2 text-base" onClick={() => setNavbarOpen(!navbarOpen)}><NavLink className="ml-2" to="/about">ABOUT</NavLink></h4></li>
                                        </div>
                                    )}
                            </Spring>
                            <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 1000}}>
                                    {props => (
                                        <div style={props}>
                                            <li className="py-4 md:py-0" ><h4 className="flex items-center no-underline px-3 py-2 text-base" onClick={() => setNavbarOpen(!navbarOpen)}><NavLink className="ml-2" to="/work">WORK</NavLink></h4></li>
                                        </div>
                                    )}
                            </Spring>
                            <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 1200}}>
                                    {props => (
                                        <div style={props}>
                                            <li className="py-4 md:py-0"><h4 className="flex items-center no-underline px-3 py-2 text-base" onClick={() => setNavbarOpen(!navbarOpen)}><NavLink className="ml-2" to="/contact">CONTACT</NavLink></h4></li>
                                        </div>
                                    )}
                            </Spring>
                            <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 1400}}>
                                    {props => (
                                        <div style={props}>
                                            <li className="py-4 md:py-0" ><a className="flex items-center no-underline px-3 py-2 text-base" onClick={() => setNavbarOpen(!navbarOpen)} href="https://drive.google.com/file/d/1iRlGlJTkCGwf8ZDs32ixYUSTjYxTRJqq/view?usp=sharing"  target="_blank" rel="noreferrer"><Button className="ml-2" type="button">Resume</Button></a></li>
                                        </div>
                                    )}
                            </Spring>
                        </ul>  
                    </div>
                    </div>
                </nav>
        )
    
    
}


