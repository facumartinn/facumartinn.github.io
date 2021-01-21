import React, {Component} from 'react'
//import './About.css'
import '../../style/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class About extends Component {
    render () {
    return (
            <div className="about-text 
                            w-3/6 
                            text-xs md:text-xl 
                            font-bold">
                <p>Hello! I'm Facundo Martin, a Full Stack Developer, based in Buenos Aires, Argentina.<br /><br /> 
                    I started the Development journey back in 2020, and since then I never stopped. I really enjoy the design side of things, so I always try to pursue the mix between a good, simple design and a high sense of usability.
                    <br /><br />
                </p>
                <p><br />Here are a few technologies that I've been working with recently:</p>
                
                <ul className="skills-list 
                                flex flex-row justify-center">
                <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "js-square"]}>Javascript</FontAwesomeIcon></li>
                    <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "react"]}>Node.js</FontAwesomeIcon></li>
                    <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "node"]}>Express.js</FontAwesomeIcon></li>
                    <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "html5"]}>HTML5</FontAwesomeIcon></li>
                    <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "css3"]}>CSS3</FontAwesomeIcon></li>
                    <li><FontAwesomeIcon className="hvr-grow" icon={["fab", "wordpress"]}>Wordpress</FontAwesomeIcon></li>
                </ul>
            </div>
    )
}
}
