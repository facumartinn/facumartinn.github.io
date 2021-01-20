import React, {Component} from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)


export default class LeftFooter extends Component {
    render () {
        return (
            <div className="Footer">
                <ul className="social-media">
                    <li><a href="https://www.linkedin.com/in/facundo-martin/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fab", "linkedin"]} /></a></li>
                    <li><a href="https://github.com/facumartinn" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fab", "github"]} /></a></li>
                    <li><a href="https://www.instagram.com/famacartin/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fab", "instagram"]} /></a></li>
                    <li><a href="mailto:facumartinn@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="hvr-grow" icon={["fa", "envelope"]} /></a></li>
                </ul>
            </div>
        )
    }
    
}