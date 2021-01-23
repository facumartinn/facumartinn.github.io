import React, {Component} from 'react'
//import './About.css'
import '../../style/app.css'
import  {Spring} from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class About extends Component {
    render () {
    return (
        <Spring from={{opacity: 0}} to={{opacity:1}} config={{delay: 500}}>
            {props => (
            <div style={props} className="about-text w-2/3 sm:w-3/6 text-sm md:text-xl font-bold">
                <p>Hello! I'm Facundo Martin, a Full Stack Developer, based in Buenos Aires, Argentina.<br /><br /> 
                    I started the Development journey back in 2020, and since then I never stopped. I really enjoy the design side of things, so I always try to pursue the mix between a good, simple design and a high sense of usability.
                    <br />
                </p>
                <p className="tex-xs sm:text-base mb-6"><br />Here are a few technologies that I've been working with recently:</p>

                <ul className="skills-list flex flex-row justify-center text-4xl sm:text-4xl">
                    <li className="p-2 sm:p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "js-square"]}>Javascript</FontAwesomeIcon></li>
                    <li className="p-2 sm:p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "react"]}>Node.js</FontAwesomeIcon></li>
                    <li className="p-2 sm:p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "node"]}>Express.js</FontAwesomeIcon></li>
                    <li className="p-2 sm:p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "html5"]}>HTML5</FontAwesomeIcon></li>
                    <li className="p-2 sm:p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "css3"]}>CSS3</FontAwesomeIcon></li>
                    <li className="p-2 sm:p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "wordpress"]}>Wordpress</FontAwesomeIcon></li>
                </ul>
            </div>            
        )}
    </Spring>
            
    )
}
}
