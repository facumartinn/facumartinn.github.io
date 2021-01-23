import React, {Component} from 'react'
//import './About.css'
import '../../style/app.css'
import  {Spring} from 'react-spring/renderprops'

export default class About extends Component {
    render () {
    return (
        <Spring from={{opacity: 0}} to={{opacity:1}} config={{delay: 0}}>
            {props => (
                <span style={props} className="border-img w-32 lg:w-80 md:w-64 sm:w-44 mr-5">
                    <img className="mr-5" src="./images/profile.jpg" alt="profile" />
                </span>
                            
            )}
        </Spring>
        
            
    )
}
}
