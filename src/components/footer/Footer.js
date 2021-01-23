import React, {Component} from 'react'
//import './Footer.css'
import '../../style/app.css'
import  {Spring} from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)


export default class LeftFooter extends Component {
    render () {
        return (
            <div className=" z-10 w-full fixed bottom-0 flex flex-row justify-center content-center mb-2">
                <ul className="w-full flex flex-row list-none items-center justify-center">
                <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 2200}}>
                        {props => (
                            <div style={props}>
                                <li className="active sm:p-1"><a className="py-1 px-2 md:px-4 text-xl md:text-2xl cursor-pointer" href="https://www.linkedin.com/in/facundo-martin/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fab", "linkedin"]} /></a></li>
                            </div>
                        )}
                    </Spring>
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 2400}}>
                        {props => (
                            <div style={props}>
                                <li className="active sm:p-1"><a className="py-1 px-2 md:px-4 text-xl md:text-2xl cursor-pointer" href="https://github.com/facumartinn" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fab", "github"]} /></a></li>
                            </div>
                        )}
                    </Spring>
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 2600}}>
                        {props => (
                            <div style={props}>
                                <li className="active sm:p-1"><a className="py-1 px-2 md:px-4 text-xl md:text-2xl cursor-pointer" href="https://www.instagram.com/famacartin/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fab", "instagram"]} /></a></li>
                            </div>
                        )}
                    </Spring>
                    <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 2800}}>
                        {props => (
                            <div style={props}>
                                <li className="active sm:p-1"><a className="py-1 px-2 md:px-4 text-xl md:text-2xl cursor-pointer" href="mailto:facumartinn@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fa", "envelope"]} /></a></li>
                            </div>
                        )}
                    </Spring>
                </ul>
            </div>
        )
    }
    
}